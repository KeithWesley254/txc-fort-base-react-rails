class Api::SoldierProfilesController < ApplicationController

    def show
        slide = SoldierProfile.find_by!(id: params[:id])
        render json: slide
    end

end
