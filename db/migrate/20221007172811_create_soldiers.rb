class CreateSoldiers < ActiveRecord::Migration[7.0]
  def change
    create_table :soldiers do |t|
      t.string :name
      t.string :image_url
      t.integer :age
      t.string :gender
      t.belongs_to :military_specialization
      t.belongs_to :platoon
      t.belongs_to :major_general


      t.timestamps
    end
  end
end
