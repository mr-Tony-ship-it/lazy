class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :destination, null: false
      t.date :date, null: false
      t.time :time, null: false

      t.timestamps
    end
  end
end