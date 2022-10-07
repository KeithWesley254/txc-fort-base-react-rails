class CreateSoldierProfiles < ActiveRecord::Migration[7.0]
  def change
    create_table :soldier_profiles do |t|

      t.timestamps
    end
  end
end
