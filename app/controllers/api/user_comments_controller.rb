class Api::UserCommentsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = UserComment.all
        render json: slides
    end

    def show
        slide = find_comment
        render json: slide, status: :ok
    end

    def create
        slide = current_user.user_comments.create!(uc_params)
        render json: slide, status: :created
    end

    def destroy
        slide = find_comment
        find_comment.destroy
        render json: {notice: "comment deleted!"}
    end

    private

    def uc_params
        params.permit(:full_name, :image_upload, :user_comment, :user_id)
    end

    def find_comment
        UserComment.find_by(id: params[:id])
    end

end
