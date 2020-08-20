class StockSerializer < ActiveModel::Serializer
  attributes :id, :name, :ticker, :price, :change

  has_many :comments
end
