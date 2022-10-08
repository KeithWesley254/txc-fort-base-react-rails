class Api::SoldiersController < ApplicationController

    def index
        slides = Soldier.all
        render json: slides
    end

    def show
        slide = Soldier.find_by!(id: params[:id])
        render json: slide, serializer: AddProfileSoldierSerializer, status: :ok
    end

end
