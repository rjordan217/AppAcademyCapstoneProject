class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.boolean :placed, default: false
      t.references :user, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end
  end
end
