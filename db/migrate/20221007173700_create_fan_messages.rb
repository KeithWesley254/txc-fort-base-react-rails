class CreateFanMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :fan_messages do |t|

      t.timestamps
    end
  end
end
