class Order < ActiveRecord::Base
  belongs_to :user
  validates :user, presence: true

  has_many :item_requests, dependent: :destroy
  has_many :requested_items, through: :item_requests, source: :item
end
