class CreateMixes < ActiveRecord::Migration[5.0]
  def change
    create_table :mixes do |t|
      t.string :mix_title
      t.integer :dj_id
      t.integer :genre_id
      t.string  :mp3_url
      t.attachment :mix_mp3
      t.attachment :mix_image

      t.timestamps
    end
  end
end
