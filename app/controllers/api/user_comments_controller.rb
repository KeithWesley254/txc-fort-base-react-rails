class Api::UserCommentsController < ApplicationController

    def index
        slides = UserComment.all
        render json: slides
    end

    def show
        slide = UserComment.find_by!(id: params[:id])
        render json: slide
    end

end
