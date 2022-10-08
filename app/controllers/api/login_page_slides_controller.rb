class Api::LoginPageSlidesController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        slides = LoginPageSlide.all
        render json: slides
    end

    def show
        slide = LoginPageSlide.find_by!(id: params[:id])
        render json: slide
    end

end
