class CreateTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :trainings do |t|

      t.timestamps
    end
  end
end
