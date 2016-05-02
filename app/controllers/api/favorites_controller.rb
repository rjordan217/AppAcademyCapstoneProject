class Api::FavoritesController < ApplicationController
  def create
    @favorite = Favorite.new(favorite_params)
    @favorite.save
    @favorite = nil unless @favorite.errors.full_messages.empty?
    render :show
  end

  def destroy
    @favorite = Favorite.find(params[:id])
    @favorite.destroy if @favorite && (current_user.id == @favorite.user_id)
    render :show
  end

  private
  def favorite_params
    params.require(:favorite).permit(:user_id, :favoritable_id, :favoritable_type)
  end
end
