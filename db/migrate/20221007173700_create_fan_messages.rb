class CreateFanMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :fan_messages do |t|
      t.belongs_to :user

      t.timestamps
    end
  end
end
