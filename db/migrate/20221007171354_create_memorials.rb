class CreateMemorials < ActiveRecord::Migration[7.0]
  def change
    create_table :memorials do |t|

      t.timestamps
    end
  end
end
