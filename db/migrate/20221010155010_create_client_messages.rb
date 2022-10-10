class CreateClientMessages < ActiveRecord::Migration[7.0]
  def change
    create_table :client_messages do |t|
      t.string :full_name
      t.string :professional_email
      t.string :their_message
      
      t.timestamps
    end
  end
end
