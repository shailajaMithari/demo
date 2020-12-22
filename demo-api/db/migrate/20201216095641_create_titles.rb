class CreateTitles < ActiveRecord::Migration[6.0]
  def change
    create_table :titles do |t|
      t.text :title
      t.text :description
      t.text :program_type
      t.text :image
      t.datetime :release_year
      t.timestamps
    end
  end
end
