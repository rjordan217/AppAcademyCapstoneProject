class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.references :store, null: false, index: true, foreign_key: true
      t.string :title, null: false
      t.text :description, null: false
      t.float :price, null: false

      t.timestamps null: false
    end
  end
end
