class LikedMix < ApplicationRecord
  belongs_to :mix
  belongs_to :user
  belongs_to :dj
end
