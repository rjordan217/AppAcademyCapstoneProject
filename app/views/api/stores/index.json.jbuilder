json.array! @stores do |store|
  json.partial! '/api/shared/store', store: store
  json.featured_pics store.items.limit(3).map {|item| item.product_pic_url}
end
