class Api::CommunityImpactsController < ApplicationController

    def index
        slides = CommunityImpact.all
        render json: slides
    end

    def show
        slide = CommunityImpact.find_by!(id: params[:id])
        render json: slide
    end

end
