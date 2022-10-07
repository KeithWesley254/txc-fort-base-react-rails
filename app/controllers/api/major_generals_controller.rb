class Api::MajorGeneralsController < ApplicationController

    def index
        slides = MajorGeneral.all
        render json: slides
    end

    def show
        slide = MajorGeneral.find_by!(id: params[:id])
        render json: slide
    end

end
