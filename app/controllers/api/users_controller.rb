class Api::UsersController < ApplicationController

    skip_before_action :authorize, only: [:create]
    
    def create
        @user = User.create!(user_params)
        if @user.valid?
            @token = encode_token({ user_id: @user.id })   
            render json: { user: UserSerializer.new(@user), jwt: @token }, status: :created
        end
    end

    def show
        user = User.find_by!(id: params[:id])
        render json: user
    end

    def destroy
        user = current_user.destroy
        head :no_content
    end
    
    private
    
    def user_params
        params.permit(:email, :password, :password_confirmation )
    end

end
