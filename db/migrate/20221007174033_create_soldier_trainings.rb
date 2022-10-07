class CreateSoldierTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :soldier_trainings do |t|

      t.timestamps
    end
  end
end
