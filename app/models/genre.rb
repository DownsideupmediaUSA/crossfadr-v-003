class Genre < ApplicationRecord
  has_many :mixes
  has_many :djs
end
