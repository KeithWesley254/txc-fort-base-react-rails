class Api::SoldierProfilesController < ApplicationController

    def index
        slides = SoldierProfile.all
        render json: slides
    end

    def show
        slide = SoldierProfile.find_by!(id: params[:id])
        render json: slide
    end

end
