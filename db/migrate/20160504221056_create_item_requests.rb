class CreateItemRequests < ActiveRecord::Migration
  def change
    create_table :item_requests do |t|
      t.references :order, index: true, foreign_key: true, null: false
      t.references :item, index: true, foreign_key: true, null: false
      t.integer :quantity, default: 1

      t.timestamps null: false
    end
  end
end
