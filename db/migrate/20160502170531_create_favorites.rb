class CreateFavorites < ActiveRecord::Migration
  def change
    create_table :favorites do |t|
      t.references :user, index: true, foreign_key: true
      t.references :favoritable, polymorphic: true, index: true

      t.timestamps null: false
    end

    add_index :favorites, [:user_id, :favoritable_id], unique: true
  end
end
