class CreateMajorGenerals < ActiveRecord::Migration[7.0]
  def change
    create_table :major_generals do |t|
      t.string :name
      t.string :image_url
      t.text :bio
      t.string :gender
      t.string :interests
      t.string :favourite_foot
      t.integer :age

      t.timestamps
    end
  end
end
