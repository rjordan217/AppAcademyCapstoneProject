class AddProfilePicUrls < ActiveRecord::Migration
  def up
    add_column :users, :profile_pic_url, :string, default: "/assets/default_profile_pic.jpg"
    add_column :stores, :main_pic_url, :string, default: "/assets/default_store_pic.png"
    add_column :items, :product_pic_url, :string, default: "/assets/default_item_pic.jpg"
  end

  def down
    remove_column :users, :profile_pic_url
    remove_column :stores, :main_pic_url
    remove_column :items, :product_pic_url
  end
end
