class Api::CommunityImpactsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = CommunityImpact.all
        render json: slides
    end

    def show
        slide = CommunityImpact.find_by!(id: params[:id])
        render json: slide
    end

end
