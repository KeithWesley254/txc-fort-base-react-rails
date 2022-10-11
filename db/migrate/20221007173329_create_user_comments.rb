class CreateUserComments < ActiveRecord::Migration[7.0]
  def change
    create_table :user_comments do |t|
      t.string :full_name
      t.string :image_upload
      t.string :user_comment
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
