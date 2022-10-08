class Api::MilitarySpecializationsController < ApplicationController

    def index
        slides = MilitarySpecialization.all
        render json: slides
    end

    def show
        slide = MilitarySpecialization.find_by!(id: params[:id])
        render json: slide, serializer: ShowMilitarySpecSoldierSerializer, status: :ok
    end
    
end
