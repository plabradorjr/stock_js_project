class AddLikesToStocks < ActiveRecord::Migration[6.0]
  def change
    add_column :stocks, :likes, :integer
  end
end
