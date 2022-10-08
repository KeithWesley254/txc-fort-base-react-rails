class CreateFanMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :fan_messages do |t|
      t.string :message
      t.belongs_to :user, foreign_key: true

      t.timestamps
    end
  end
end
