class Item < ActiveRecord::Base
  validates :title, :description, :price, :store_id, presence: true
  validates :title, uniqueness: { scope: :store_id,
    message: "must have unique title within store" }

  belongs_to :store
  validates_presence_of :store

  has_many :favorites, as: :favoritable, dependent: :destroy
end
