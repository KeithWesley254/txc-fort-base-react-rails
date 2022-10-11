class Api::UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def create
        ActiveRecord::Base.transaction do
            @user = User.create!(user_params)
            session[:user_id] = @user.id
            render json: @user, status: :created

            user_profile = OneUserProfile.create!(
                email: @user.email,
                user_id: @user.id
            )
        end
    end

    def show
        user = User.find_by!(id: session[:user_id])
        render json: user
    end

    def destroy
        user = @current_user.destroy
        head :no_content
    end
    
    private
    
    def user_params
        params.permit(:email, :password, :password_confirmation )
    end

end
