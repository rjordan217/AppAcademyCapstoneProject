class AddIndexToOrderIdItemId < ActiveRecord::Migration
  def change
      add_index :item_requests, [:order_id, :item_id], unique: true
  end
end
