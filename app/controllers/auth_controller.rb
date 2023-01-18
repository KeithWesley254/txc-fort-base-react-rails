class AuthController < ApplicationController
    skip_before_action :authorized, only: [:create, :auto_login]

    def create
      @user = User.find_by(email: user_login_params[:email])
    
      if @user && @user.authenticate(user_login_params[:password])
        @token = encode_token({ user_id: @user.id })   
        render json: { user: UserSerializer.new(@user), jwt: @token }, status: :accepted   
      else
        render json: { errors: ["Invalid Email Address or Password"] }, status: :unauthorized
      end
    end

    def auto_login
      @token = params[:token]
      user = User.find(JWT.decode(@token, "194715b3254c06ed3776a68387af819b76", true, algorithm: 'HS256')[0]["user_id"])
      render json: user
    end

    private

    def user_login_params
      params.permit(:email, :password)
    end

end