class Market < ApplicationRecord
    has_many :stocks
    has_many :comments
end
