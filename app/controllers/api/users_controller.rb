class Api::UsersController < ApplicationController
  before_action :verify_login, only: [:show, :destroy]

  def create
    @user = User.new(user_params)
    login!(@user) if @user.save
    @errors += @user.errors.full_messages
    render :show
  end

  def show
    render :show
  end

  def destroy
    @user = current_user
    errs = []
    unless @user.nil?
      if @user.username != "pet_lover_demo"
        @user.destroy
        errs = @user.errors.full_messages
      else
        errs << "Cannot delete demo account!"
      end
      logout! unless errs.empty?
    end
    @user = User.new
    @errors += errs
    render :show
  end

  private
  def verify_login
    @user = current_user || User.new
  end
end
