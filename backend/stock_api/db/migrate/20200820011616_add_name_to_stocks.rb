class AddNameToStocks < ActiveRecord::Migration[6.0]
  def change
    add_column :stocks, :name, :string
    add_column :stocks, :change, :integer
  end
end
