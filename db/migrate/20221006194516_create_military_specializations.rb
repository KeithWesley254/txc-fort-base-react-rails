class CreateMilitarySpecializations < ActiveRecord::Migration[7.0]
  def change
    create_table :military_specializations do |t|
      t.string :spec_title
      t.text :spec_description
      t.string :sphere
      t.integer :financial_investment
      t.string :commander_in_charge
      t.string :commander_image_url
      t.string :spec_image_url

      t.timestamps
    end
  end
end
