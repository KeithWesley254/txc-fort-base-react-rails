class CreateAboutUs < ActiveRecord::Migration[7.0]
  def change
    create_table :about_us do |t|
      t.text :who_description
      t.string :who_image_url
      t.text :comm_description
      t.string :comm_image_url

      t.timestamps
    end
  end
end
