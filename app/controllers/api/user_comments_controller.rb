class Api::UserCommentsController < ApplicationController

    def index
        slides = @current_user.user_comments.all
        render json: slides
    end

    def show
        slide = find_comment
        render json: slide, status: :ok
    end

    def create
        slide = @current_user.user_comments.create!(uc_params)
        render json: slide, status: :created
    end

    def destroy
        slide = find_comment
        find_comment.destroy!
        render json: {"comment deleted!"}, status: :ok
    end

    private

    def uc_params
        params.permit(:user_comment)
    end

    def find_comment
        UserComment.find_by!(id: session[:user_id])
    end

end
