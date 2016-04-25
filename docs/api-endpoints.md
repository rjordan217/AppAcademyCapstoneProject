# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Stores

- `GET /stores/new`
- `POST /stores`
- `PATCH /stores`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Items

- `GET /api/items`
  - Items index/search
  - accepts `tag_name` query param to list notes by tag
- `GET /api/stores/:store_id/items/new`
- `POST /api/stores/:store_id/items`
- `PATCH /api/stores/:store_id/items/:item_id`
- `DELETE /api/stores/:store_id/items/:item_id`
  - Item modification URLs will pre-validate presence of a valid store session_token and redirect if not present
- `GET /api/stores/:store_id/items/:item_id`

<!-- TODO: Add more JSON APIs??? -->

### Tags

- A note's tags will be included in the item show template
- `GET /api/tags`
  - includes query param for typeahead suggestions
- `POST /api/items/:item_id/tags`: add tag to item by name
  - if item doesn't already exist, it will be created
- `DELETE /api/items/:item_id/tags/:tag_name`: remove tag from item by
  name
