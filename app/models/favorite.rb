class Favorite < ActiveRecord::Base
  validates :favoritable_id, uniqueness: { scope: :user_id }

  belongs_to :user
  validates :user, presence: true

  belongs_to :favoritable, polymorphic: true
  validates :favoritable, presence: true
end
