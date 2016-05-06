class Api::ItemRequestsController < ApplicationController
  before_action :ensure_logged_in

  def create
    if current_user.orders.any? {|order| order.id == item_request_params[:order_id].to_i}
      @item_request = ItemRequest.where(
        order_id: item_request_params[:order_id],
        item_id: item_request_params[:item_id]
      ).first
      if @item_request
        puts @item_request
        @item_request.update_attributes(
          quantity: @item_request.quantity + item_request_params[:quantity].to_i
        )
      else
        @item_request = ItemRequest.new(item_request_params)
        @item_request.save
      end
      @errors += @item_request.errors.full_messages
      render :show
    else
      flash[:errors] = ["You do not have permission to make this item request."]
      redirect_to '/'
    end
  end

  def destroy
    if verify_permissions
      @item_request.destroy
      @errors += @item_request.errors.full_messages
    end
    render :show
  end

  private
  def item_request_params
    params.require(:item_request).permit(:order_id, :item_id, :quantity)
  end

  def ensure_logged_in
    if current_user.nil?
      flash[:errors] = ["Must be logged in to make or delete item requests."]
      redirect_to '/'
    end
  end

  def verify_permissions
    @item_request = ItemRequest.find(params[:id])
    if @item_request.nil?
      @item_request = ItemRequest.new
      @errors += ["Item request does not exist"]
      return false
    else
      orden = @item_request.order
      if not(@item_request.order.placed) and current_user.orders.include?(orden)
        return true
      end
      @errors += ["You may not modify this item request"]
      false
    end
  end
end
