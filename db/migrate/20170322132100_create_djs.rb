class CreateDjs < ActiveRecord::Migration[5.0]
  def change
    create_table :djs do |t|
      t.string :dj_name
      t.attachment :dj_image

      t.timestamps
    end
  end
end
