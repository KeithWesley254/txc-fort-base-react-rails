class Api::UserProfilesController < ApplicationController

    def show
        slide = @current_user.user_profile
        render json: slide
    end

    def update
        slide = @current_user.user_profile.update!(up_params)
        render json: slide, status: :created
    end

    def destroy
        @current_user.destroy
        session.delete :user_id
        head :no_content
    end

    private

    def up_params
        params.permit(:full_name, :age, :gender, :bio, :interests, :image_upload, :favourite_military_branch)
    end

end
