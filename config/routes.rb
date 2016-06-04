Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resource :user, only: [:create, :show, :destroy]
    resources :stores, only: [:index, :create, :show, :update, :destroy]
    resources :items, only: [:index, :create, :show, :update, :destroy]
    resources :favorites, only: [:create, :destroy]
    resources :orders, only: [:create, :show, :update, :destroy]
    get 'cart/current', to: 'orders#show'
    resources :item_requests, only: [:create, :destroy]

    namespace :search do
      resources :items, only: [:index]
      resources :stores, only: [:index]
    end
  end
end
