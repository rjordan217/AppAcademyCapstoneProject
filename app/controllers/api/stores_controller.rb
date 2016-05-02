class Api::StoresController < ApplicationController
  before_action :find_store, only: [:show, :update, :destroy]
  before_action :ensure_logged_in, except: [:index, :show]
  before_action :ensure_store_owner, only: [:update, :destroy]

  def index
    @stores = Store.all.includes(:favorites)
    render :index
  end

  def create
    @store = Store.new(store_params.merge({user_id: current_user.id}))
    @store.save
    @errors += @store.errors.full_messages
    render :show
  end

  def show
    render :show
  end

  def update
    @store.update_attributes(store_params)
    @errors += @store.errors.full_messages
    render :show
  end

  def destroy
    @store.destroy
    @errors += @store.errors.full_messages
    render :show
  end

  private
  def store_params
    params.require(:store).permit(:store_name, :description)
  end

  def find_store
    @store = Store.find(params[:id])
  end

  def ensure_logged_in
    if current_user.nil?
      flash[:errors] = ["Must be logged in to make or edit stores."]
      redirect_to root
    end
  end

  def ensure_store_owner
    if current_user.id != @store.user_id
      redirect_to api_stores_url
    end
  end
end
