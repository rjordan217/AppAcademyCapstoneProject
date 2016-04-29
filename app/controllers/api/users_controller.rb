class Api::UsersController < ApplicationController
  before_action :verify_login, only: [:show, :destroy]

  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      flash.now[:errors] = @user.errors.full_messages
      render :new, status: 401
    end
  end

  def show
    render :show
  end

  def destroy
    @user = User.find(params[:id])
    @user.destroy!
    logout!
    render :new
  end

  private
  def verify_login
    if @user.nil?
      @user = User.new
      render :show
    end
  end
end
