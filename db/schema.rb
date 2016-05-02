# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160502170531) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "favoritable_id"
    t.string   "favoritable_type"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
  end

  add_index "favorites", ["favoritable_type", "favoritable_id"], name: "index_favorites_on_favoritable_type_and_favoritable_id", using: :btree
  add_index "favorites", ["user_id", "favoritable_id"], name: "index_favorites_on_user_id_and_favoritable_id", unique: true, using: :btree
  add_index "favorites", ["user_id"], name: "index_favorites_on_user_id", using: :btree

  create_table "items", force: :cascade do |t|
    t.integer  "store_id",                                                 null: false
    t.string   "title",                                                    null: false
    t.text     "description",                                              null: false
    t.float    "price",                                                    null: false
    t.datetime "created_at",                                               null: false
    t.datetime "updated_at",                                               null: false
    t.string   "product_pic_url", default: "/assets/default_item_pic.png"
  end

  add_index "items", ["store_id"], name: "index_items_on_store_id", using: :btree

  create_table "stores", force: :cascade do |t|
    t.string   "store_name",                                             null: false
    t.text     "description",                                            null: false
    t.integer  "user_id",                                                null: false
    t.datetime "created_at",                                             null: false
    t.datetime "updated_at",                                             null: false
    t.string   "main_pic_url", default: "/assets/default_store_pic.png"
  end

  add_index "stores", ["store_name"], name: "index_stores_on_store_name", using: :btree
  add_index "stores", ["user_id"], name: "index_stores_on_user_id", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "username",                                                    null: false
    t.string   "password_digest",                                             null: false
    t.string   "session_token",                                               null: false
    t.datetime "created_at",                                                  null: false
    t.datetime "updated_at",                                                  null: false
    t.string   "profile_pic_url", default: "/assets/default_profile_pic.jpg"
  end

  add_foreign_key "favorites", "users"
  add_foreign_key "items", "stores"
  add_foreign_key "stores", "users"
end
