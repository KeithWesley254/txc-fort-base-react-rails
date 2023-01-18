class Api::PlatoonsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]
    
    def index
        slides = Platoon.all
        render json: slides
    end

    def show
        slide = Platoon.find_by!(id: params[:id])
        render json: slide, serializer: ShowPlatoonSoldiersSerializer, status: :ok
    end

end
