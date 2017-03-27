class DjSerializer < ActiveModel::Serializer
  attributes :id, :dj_name, :dj_image

  has_many :mixes
  has_many :liked_mixes
  has_many :shared_mixes
end
