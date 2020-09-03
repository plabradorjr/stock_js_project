class CommentsController < ApplicationController

    def index
       
        @comments = Comment.all

        render json: @comments, status: 200
        
    end

    def new
        
        @comment = Comment.new
    end

    def create
        @comment = Comment.new(content: params[:content], name: params[:name])
        @comment.market = Market.all.first
        @comment.save

        all_stocks_and_comments = Market.all
        render json: all_stocks_and_comments
    end

    def show
        @comment = Comment.find(params[:id])
        render json: @comment, status: 200
    end

    def destroy
        @comment = Comment.find(parms[:id])
        @comment.delete

    end

    def edit
        
    end

    def update
        
    end


    private

    def comment_params
        params.require(:comment).permit(:name, :content)
    end

end
