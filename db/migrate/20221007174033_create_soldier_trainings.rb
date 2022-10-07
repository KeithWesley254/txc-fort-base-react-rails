class CreateSoldierTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :soldier_trainings do |t|
      t.belongs_to :soldier
      t.belongs_to :training

      t.timestamps
    end
  end
end
