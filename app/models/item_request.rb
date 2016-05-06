class ItemRequest < ActiveRecord::Base
  validates :order_id, uniqueness: { scope: :item_id }

  belongs_to :order
  validates :order, presence: true

  belongs_to :item
  validates :item, presence: true
end
