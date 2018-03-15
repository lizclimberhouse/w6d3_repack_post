class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :color
      t.text :body
      t.string :image
      t.string :due

      t.timestamps
    end
  end
end
