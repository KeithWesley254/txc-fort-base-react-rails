class Api::MajorGeneralsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = MajorGeneral.all
        render json: slides
    end

    def show
        slide = MajorGeneral.find_by!(id: params[:id])
        render json: slide, serializer: ShowGeneralSoldierSerializer, status: :ok
    end

end
