class CreateUserComments < ActiveRecord::Migration[7.0]
  def change
    create_table :user_comments do |t|

      t.timestamps
    end
  end
end
