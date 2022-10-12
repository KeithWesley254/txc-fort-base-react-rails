class Api::FanMessagesController < ApplicationController

    def index
        slides = FanMessage.all
        render json: slides
    end

    def create
        slide = @current_user.fan_messages.create!(fm_params)
        render json: slide, status: :created
    end

    private

    def fm_params
        params.permit(:message, :user_id, :soldier_id)
    end

end
