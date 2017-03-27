class Dj < ApplicationRecord
  has_many :mixes
  has_many :liked_mixes
  has_many :shared_mixes
  has_attached_file :dj_image, styles: {medium: "550x550>", thumb: "150x150"}
  validates_attachment_content_type :dj_image, :content_type => /\Aimage\/.*\z/
end
