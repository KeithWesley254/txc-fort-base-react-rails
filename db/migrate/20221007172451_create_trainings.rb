class CreateTrainings < ActiveRecord::Migration[7.0]
  def change
    create_table :trainings do |t|
      t.string :title
      t.string :image_url
      t.string :description
      t.integer :duration_in_hours
      t.string :instructor_name

      t.timestamps
    end
  end
end
