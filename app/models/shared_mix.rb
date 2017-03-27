class SharedMix < ApplicationRecord
  belongs_to :mix
  belongs_to :user
  belongs_to :dj
end
