class Store < ActiveRecord::Base
  validates :store_name, presence: true, uniqueness: true
  validates :description, presence: true

  belongs_to :user
  validates_presence_of :user

  has_many :items, dependent: :destroy
end
