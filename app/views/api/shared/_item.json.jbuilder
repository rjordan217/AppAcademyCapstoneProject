json.extract! item, :title, :id, :product_pic_url, :price
json.favorites item.favorites, partial: '/api/shared/favorite', as: :favorite
