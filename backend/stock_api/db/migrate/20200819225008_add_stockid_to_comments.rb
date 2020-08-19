class AddStockidToComments < ActiveRecord::Migration[6.0]
  def change
    add_column :comments, :stock_id, :integer
  end
end
