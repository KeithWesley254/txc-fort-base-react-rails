class Api::SoldierProfilesController < ApplicationController

    skip_before_action :authorize, only: [:show]

    def show
        slide = SoldierProfile.find_by!(id: params[:id])
        render json: slide
    end

end
