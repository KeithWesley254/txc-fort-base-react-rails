class ApplicationController < ActionController::API

    rescue_from ActiveRecord::RecordInvalid, with: :entity_unread
    rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
    
    before_action :authorize
     
      def encode_token(payload)
        JWT.encode(payload, "194715b3254c06ed3776a68387af819b76")
      end
      
      # Helper function to check a request if there is an Authorization header
      def auth_header
        request.headers['Authorization']
      end
  
      # Check to see if this request has the auth header, and if the token passed in 
      # is authenticated by the JWT decoding authentication
      def decoded_token
        if auth_header
          # label token from the header of the request, the first word will be Bearer by convention
          # If you send in JUST the token as your Authorization you won't need the split
          token = auth_header.split(' ')[1]
          begin
            # decode the token with your secret password/phrase
            JWT.decode(token, "194715b3254c06ed3776a68387af819b76", true, algorithm: 'HS256')
          rescue JWT::DecodeError
            nil
          end
        end
      end
  
      # Used to find the current user if their token passes it's authentication
      def current_user
        if decoded_token
          # Using the decoded token, grab the user_id stored within it and find a user
          user_id = decoded_token[0]['user_id']
          @user = User.find(user_id)
        end
      end
  
      # Check if a user is logged in through a series of chained methods
      def logged_in?
        !!current_user
      end
  
      # If a user is NOT logged in, it sends the message "Please log in"
      def authorize
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
      end
  
      def entity_unread(invalid)
          render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
      end
  
      def render_not_found_response
          render json: { error: "Oops! Item Not Found" }, status: :not_found
      end
  
      def cancan_denial(exception)
        render json: {warning: exception, status: :authorization_failed}, status: :unauthorized
      end
      
end
     