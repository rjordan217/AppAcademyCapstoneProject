class Api::Search::ItemsController < ApplicationController
  def index
    @items = Item.where(
      "title ILIKE ? OR description ILIKE ?",
      parsed_search_params,
      parsed_search_params
    ).includes(:favorites)
    render '/api/items/index'
  end
end
