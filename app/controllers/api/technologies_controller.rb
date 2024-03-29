class Api::TechnologiesController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = Technology.all
        render json: slides
    end

    def show
        slide = Technology.find_by!(id: params[:id])
        render json: slide
    end

end
