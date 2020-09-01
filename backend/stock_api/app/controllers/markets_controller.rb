class MarketsController < ApplicationController


    def index
        refresh_stocks_database_daily
        scrape_and_save_us_market
        markets = Market.all

        render json: markets, status: 200
        
    end

    def new
        # @stock = Stock.new
    end

    def create
        #POST request gets fetched here
        
    end

    def show
        @market = Market.find(params[:id])
        render json: @stock, status: 200
    end

    def destroy
        @market = Market.find(parms[:id])
        @market.delete

        render json: {stockId: @stock.id}
    end

    def edit
        
    end

    def update
        
    end
    

    private

    def stock_params
        params.require(:market).permit(:name)
    end

    def scrape_and_save_us_market
        
        @usMarket = Market.find_by(name: "US")
        site = "https://finance.yahoo.com/gainers"
        doc = Nokogiri::HTML(open(site))

        table = doc.css("tbody")
        rows = table.css("tr.simpTblRow")

        rows.each do |stock|
            stock_ticker =  stock.css("a")[0].text
            stock_change = stock.css("span")[2].text
            stock_name = stock.css("td")[1].text
            stock_price = stock.css("span")[0].text

            Stock.where(ticker: stock_ticker).first_or_initialize.tap do |s|
                s.price = stock_price
                s.change = stock_change
                s.name = stock_name
                s.likes = 420
                s.market = @usMarket
                s.save
            end
        end
    end

    def refresh_stocks_database_daily
        Stock.all.delete_all unless (Stock.last.created_at.day == DateTime.now.new_offset(-5).day)
    end

end