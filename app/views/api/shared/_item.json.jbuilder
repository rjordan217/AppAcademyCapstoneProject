json.extract! item, :title, :id, :product_pic_url, :price, :store_id
json.favorites item.favorites, partial: '/api/shared/favorite', as: :favorite
