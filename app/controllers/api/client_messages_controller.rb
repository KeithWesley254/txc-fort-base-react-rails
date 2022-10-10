class Api::ClientMessagesController < ApplicationController

    def index
        messages = ClientMessage.all
        render json: messages, status: :ok
    end

    def create
        if @current_user
            user = ClientMessage.create!(cm_params)
            render json: user, status: :created
        end
    end

    private

    def cm_params
        params.permit(:full_name, :professional_email, :their_message)
    end

end
