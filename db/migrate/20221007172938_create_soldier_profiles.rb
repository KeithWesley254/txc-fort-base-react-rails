class CreateSoldierProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :soldier_profiles do |t|
      t.string :name
      t.integer :platoon_id
      t.string :gender
      t.string :bio
      t.string :interests
      t.string :image_url
      t.string :image_url_2
      t.string :image_url_3
      t.string :favourite_foot
      t.string :skills
      t.belongs_to :soldier, index: { unique: true }, foreign_key: true

      t.timestamps
    end
  end
end
