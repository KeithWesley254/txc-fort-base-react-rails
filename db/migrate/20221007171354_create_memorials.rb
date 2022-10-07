class CreateMemorials < ActiveRecord::Migration[7.0]
  def change
    create_table :memorials do |t|
      t.string :name
      t.string :title
      t.string :image_url
      t.integer :age
      t.string :description

      t.timestamps
    end
  end
end
