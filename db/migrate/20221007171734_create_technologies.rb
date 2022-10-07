class CreateTechnologies < ActiveRecord::Migration[7.0]
  def change
    create_table :technologies do |t|

      t.timestamps
    end
  end
end
