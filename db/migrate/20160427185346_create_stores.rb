class CreateStores < ActiveRecord::Migration
  def change
    create_table :stores do |t|
      t.string :store_name, null: false, unique: true, index: true
      t.text :description, null: false
      t.references :user, null: false, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
