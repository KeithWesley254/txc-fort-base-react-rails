class Api::MemorialsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = Memorial.all
        render json: slides
    end

    def show
        slide = Memorial.find_by!(id: params[:id])
        render json: slide
    end

end
