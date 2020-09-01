class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :price, :change, :likes

  has_many :comments
end
