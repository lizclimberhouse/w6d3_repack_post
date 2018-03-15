class CreateFriends < ActiveRecord::Migration[5.1]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :pic
      t.string :desc

      t.timestamps
    end
  end
end
