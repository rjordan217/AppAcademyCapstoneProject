json.partial! '/api/shared/store', store: @store
json.description @store.description
json.associated_user @store.user
json.created_at @store.created_at
json.errors @errors
