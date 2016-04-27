class Api::SessionsController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login!(@user)
      render '/api/users/show'
    else
      flash.now[:errors] = ["Incorrect username/password combination. Please try again."]
      @user = User.new
      render :new, status: 401
    end
  end

  def destroy
    logout!
    @user = User.new
    render :new
  end
end
