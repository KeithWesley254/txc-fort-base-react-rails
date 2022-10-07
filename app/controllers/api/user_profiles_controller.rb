class Api::UserProfilesController < ApplicationController

    def index
        slides = UserProfile.all
        render json: slides
    end

    def show
        slide = UserProfile.find_by!(id: params[:id])
        render json: slide
    end

    def update
    end

    def destroy
    end

end
