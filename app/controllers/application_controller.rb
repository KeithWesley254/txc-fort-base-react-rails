class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordInvalid, with: :entity_unread
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    before_action :authorize

    private

    def authorize
        @current_user = User.find_by(id: session[:user_id])
        render json: { errors: ["Please Login to access this feature"] }, status: :unauthorized unless @current_user
    end

    def entity_unread(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found_response
        render json: { error: "Oops! Item Not Found" }, status: :not_found
    end
end
