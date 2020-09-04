class UpdateColumnStocks < ActiveRecord::Migration[6.0]
  def change
    change_table :stocks do |t|
      t.change :price, :float
      t.change :change, :string
    end
  end
end
