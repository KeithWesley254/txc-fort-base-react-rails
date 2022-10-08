class Api::PlatoonsController < ApplicationController
    
    def index
        slides = Platoon.all
        render json: slides
    end

    def show
        slide = Platoon.find_by!(id: params[:id])
        render json: slide, serializer: ShowPlatoonSoldiersSerializer, status: :ok
    end

end
