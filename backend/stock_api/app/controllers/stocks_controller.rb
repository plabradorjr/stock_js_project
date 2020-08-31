class StocksController < ApplicationController


    def index
      
        @stocks = Stock.all

        render json: @stocks, status: 200
        
    end

    def new
        # @stock = Stock.new
    end

    def create

        @stock = Stock.new(stock_params)
        
    end

    def show
        @stock = Stock.find(params[:id])
        render json: @stock, status: 200
    end

    def destroy
        @stock = Stock.find(parms[:id])
        @stock.delete

        render json: {stockId: @stock.id}
    end

    def edit
        
    end

    def update
        
    end
    

    private

    def stock_params
        params.require(:stock).permit(:ticker, :price, :change, :name)
    end

   

end
