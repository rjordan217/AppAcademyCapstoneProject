class Api::ItemsController < ApplicationController
  before_action :find_item, only: [:show, :update, :destroy]
  before_action :ensure_logged_in, except: [:index, :show]
  before_action :ensure_item_owner, only: [:update, :destroy]

  def index
    @items = Item.where(store_id: params[:store_id]).includes(:favorites)
    render :index
  end

  def create
    @item = Item.new(item_params)
    if @item.store.user_id != current_user.id
      @errors = ["Attempted to submit with other store id"]
      render :show
    else
      @item.save
      @errors = @item.errors.full_messages
      render :show
    end
  end

  def show
    render :show
  end

  def update
    @item.update_attributes(item_params.except(:store_id))
    @errors = @item.errors.full_messages
    render :show
  end

  def destroy
    @item.destroy
    render :show
  end

  private
  def item_params
    params.require(:item).permit(
      :title, :price, :product_pic_url, :store_id, :description
    )
  end

  def find_item
    @item = Item.find(params[:id])
  end

  def ensure_logged_in
    if current_user.nil?
      flash[:errors] = ["Must be logged in to make or edit items."]
      redirect_to '/'
    end
  end

  def ensure_item_owner
    if current_user.id != @item.store.user_id
      flash[:errors] = ["Must be store owner to edit or destroy items"]
      redirect_to '/'
    end
  end
end
