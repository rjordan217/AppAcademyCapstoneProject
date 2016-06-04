class Api::OrdersController < ApplicationController
  before_action :ensure_logged_in
  before_action :get_order, only: [:show, :update, :destroy]

  def create
    @order = Order.new(order_params.merge({user_id: current_user.id}))
    @order.save
    @errors += @order.errors.full_messages
    render :show
  end

  def show
    if proper_user
      render :show
    end
  end

  def update
    if proper_user
      if (order_params[:placed] == "true")
        @order.update_attributes(order_params)
        @errors += @order.errors.full_messages
      else
        @errors += ["Cannot update attribute. Try deleting order instead."]
      end
      render :show
    end
  end

  def destroy
    if proper_user
      @order.destroy
      @errors += @order.errors.full_messages
      render :show
    end
  end

  private
  def order_params
    params.require(:order).permit(:placed)
  end

  def ensure_logged_in
    if current_user.nil?
      flash[:errors] = ["Must be logged in to make or edit orders."]
      redirect_to '/'
    end
  end

  def get_order
    if params[:id]
      @order = Order.find(params[:id])
    else
      @order = Order.where(user_id: current_user.id).order(updated_at: :desc).first
    end
  end

  def proper_user
    return true if @order.user_id == current_user.id
    @errors += ["You do not have permission to view/edit this order."]
    render :show
    false
  end
end
