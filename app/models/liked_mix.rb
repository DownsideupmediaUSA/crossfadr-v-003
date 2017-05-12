class LikedMix < ApplicationRecord
  belongs_to :mix
  belongs_to :user

  validates_uniqueness_of :mix, scope: :user

end
