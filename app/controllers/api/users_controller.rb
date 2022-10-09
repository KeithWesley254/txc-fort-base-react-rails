class Api::UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def create
        @user = User.create!(user_params)
        session[:user_id] = @user.id
        render json: @user, status: :created
    end

    def show
        user = User.find_by!(id: session[:user_id])
        render json: user
    end

    private
    
    def user_params
        params.permit(:full_name, :email, :password, :password_confirmation, :age, :gender, :bio, :interests, :image_upload, :favourite_military_branch)
    end

end
