class AddMarketIdToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :market_id, :integer
  end
end
