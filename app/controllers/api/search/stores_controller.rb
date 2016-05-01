class Api::Search::StoresController < ApplicationController
  def index
    @stores = Store.where(
      "store_name ILIKE ? OR description ILIKE ?",
      parsed_search_params,
      parsed_search_params
    )
    render '/api/stores/index'
  end
end
