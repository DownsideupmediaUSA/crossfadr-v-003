class MixSerializer < ActiveModel::Serializer
  attributes :id, :mix_title, :dj_id, :mix_image, :mix_mp3

  has_one :dj
  has_many :liked_mixes
  has_many :shared_mixes
end
