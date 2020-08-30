class CommentsController < ApplicationController

    def index
       
        @comments = Comment.all

        render json: @comments, status: 200
        
    end

    def new
        @comment = Comment.new
    end

    def create

        @comment = Comment.new(comment_params)
        
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
