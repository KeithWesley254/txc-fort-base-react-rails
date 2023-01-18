class HomeDatabaseController < ApplicationController
    skip_before_action :authorize

    def index
        render json: 
        %{
            Here is a list of all the endpoints:

            GET
            /api/events
            /api/categories
            /api/communities
            /api/home_banners
            /api/login_slides
            /api/tickets
            /api/user_attendeds
            /api/user_profiles
            /api/users

            PATCH
            /api/events/:id
            /api/user_profiles/:id

            DELETE
            /api/user_profiles/:id
            /api/users/:id
            /api/events/:id
        }
    end

end