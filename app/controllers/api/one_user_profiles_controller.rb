class Api::OneUserProfilesController < ApplicationController

    def show
        user = OneUserProfile.find_by(id: params[:id])
        render json: user, status: :ok
    end

    def update
        user = @current_user.one_user_profile.update!(update_params)
        render json: user, status: :created
    end

    private

    def update_params
        params.permit(:full_name, :age, :gender, :bio, :interests, :image_upload, :favourite_military_branch)
    end

end
