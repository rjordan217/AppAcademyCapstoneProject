json.extract! store, :store_name, :id, :main_pic_url
json.favorites store.favorites, partial: '/api/shared/favorite', as: :favorite
