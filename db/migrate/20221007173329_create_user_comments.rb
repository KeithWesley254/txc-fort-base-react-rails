class CreateUserComments < ActiveRecord::Migration[7.0]
  def change
    create_table :user_comments do |t|
      t.string :user_comment
      t.belongs_to :user

      t.timestamps
    end
  end
end
