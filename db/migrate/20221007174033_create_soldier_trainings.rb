class CreateSoldierTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :soldier_trainings do |t|
      t.belongs_to :soldier, foreign_key: true
      t.belongs_to :training, foreign_key: true

      t.timestamps
    end
  end
end
