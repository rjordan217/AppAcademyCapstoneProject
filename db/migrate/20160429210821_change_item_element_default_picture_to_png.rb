class ChangeItemElementDefaultPictureToPng < ActiveRecord::Migration
  def change
    change_column_default :items, :product_pic_url, "/assets/default_item_pic.png"
  end
end
