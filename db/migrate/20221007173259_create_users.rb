class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :full_name
      t.string :email
      t.string :password_digest
      t.boolean :is_admin?
      t.integer :age
      t.string :gender
      t.string :bio
      t.string :interests
      t.string :image_upload
      t.string :favourite_military_branch
      
      t.timestamps
    end
  end
end
