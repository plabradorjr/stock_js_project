class Stock < ApplicationRecord

    has_many :comments
    belongs_to :market

    # def self.scrapeAndSaveYahooFinance

    #         doc = Nokogiri::HTML(open("https://finance.yahoo.com/gainers"))

    #         table = doc.css("tbody")
    #         rows = table.css("tr.simpTblRow")

    #         rows.each do |stock|
    #             stock_ticker =  stock.css("a")[0].text
    #             stock_change = stock.css("span")[2].text
    #             stock_name = stock.css("td")[1].text
    #             stock_price = stock.css("span")[0].text

    #             Stock.create(name: stock_name, ticker: stock_ticker, price: stock_price, change: stock_change)
    #         end
    # end

end
