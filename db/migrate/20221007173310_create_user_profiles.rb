class CreateUserProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :user_profiles do |t|
      t.string :full_name
      t.string :email
      t.integer :age
      t.string :gender
      t.string :bio
      t.string :interests
      t.image :image_upload
      t.string :favourite_military_branch
      t.belongs_to :user, index: { unique: true }, foreign_key: true

      t.timestamps
    end
  end
end
