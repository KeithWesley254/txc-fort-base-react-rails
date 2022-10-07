class CreateTechnologies < ActiveRecord::Migration[7.0]
  def change
    create_table :technologies do |t|
      t.string :title
      t.string :author
      t.string :image_url
      t.string :description
      t.date :date_written

      t.timestamps
    end
  end
end
