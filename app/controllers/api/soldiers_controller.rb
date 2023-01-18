class Api::SoldiersController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = Soldier.all
        render json: slides
    end

    def show
        slide = Soldier.find_by!(id: params[:id])
        render json: slide, serializer: AddProfileSoldierSerializer, status: :ok
    end

end
