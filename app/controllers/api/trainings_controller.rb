class Api::TrainingsController < ApplicationController
    
    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = Training.all
        render json: slides
    end

    def show
        slide = Training.find_by!(id: params[:id])
        render json: slide
    end

end
