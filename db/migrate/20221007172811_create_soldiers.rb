class CreateSoldiers < ActiveRecord::Migration[7.0]
  def change
    create_table :soldiers do |t|

      t.timestamps
    end
  end
end
