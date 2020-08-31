class AddMarketIdToStocks < ActiveRecord::Migration[6.0]
  def change
    add_column :stocks, :market_id, :integer
  end
end
