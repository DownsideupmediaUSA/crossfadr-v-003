class CreateSharedMixes < ActiveRecord::Migration[5.0]
  def change
    create_table :shared_mixes do |t|
      t.integer :mix_id
      t.integer :user_id
      t.integer :dj_id

      t.timestamps
    end
  end
end
