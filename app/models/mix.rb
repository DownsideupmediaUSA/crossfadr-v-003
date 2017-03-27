class Mix < ApplicationRecord
  belongs_to :dj
  has_many :liked_mixes
  has_many :shared_mixes
  has_attached_file :mix_image, styles: { large: "600x600>", medium: "600x600>", thumb: "150x150#"}
  validates_attachment_content_type :mix_image, :content_type => /\Aimage\/.*\z/
  has_attached_file :mix_mp3

  validates_attachment :mix_mp3, :content_type => { :content_type =>  ["audio/mpeg", "audio/mp3"] },
                                 :file_name => { :matches => [/mp3\Z/] }

end
