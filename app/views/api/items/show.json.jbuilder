json.partial! '/api/shared/item', item: @item
json.description @item.description
json.associated_store @item.store
json.created_at @item.created_at
json.errors @errors
