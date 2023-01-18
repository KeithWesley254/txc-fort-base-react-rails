class Api::AboutUsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = AboutU.all
        render json: slides
    end

    def show
        slide = AboutU.find_by!(id: params[:id])
        render json: slide
    end

end
