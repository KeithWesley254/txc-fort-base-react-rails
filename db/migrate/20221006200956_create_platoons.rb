class CreatePlatoons < ActiveRecord::Migration[7.0]
  def change
    create_table :platoons do |t|
      t.string :name
      t.string :sphere_assigned
      t.string :skill_lvl
      t.integer :ranking
      t.belongs_to :major_general

      t.timestamps
    end
  end
end
