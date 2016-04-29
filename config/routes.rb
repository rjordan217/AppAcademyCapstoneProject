Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resource :user, only: [:create, :show, :destroy]
    resources :stores, only: [:index, :create, :show, :update, :destroy]
  end
end
