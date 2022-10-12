class AddColumnToFanMessages < ActiveRecord::Migration[7.0]
  def change
    add_reference :fan_messages, :soldier, foreign_key: true
  end
end
