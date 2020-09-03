class MarketSerializer < ActiveModel::Serializer
  attributes :id, :name, :stocks, :comments
end
