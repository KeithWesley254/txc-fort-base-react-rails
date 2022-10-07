class Api::MemorialsController < ApplicationController

    def index
        slides = Memorial.all
        render json: slides
    end

    def show
        slide = Memorial.find_by!(id: params[:id])
        render json: slide
    end

end
