Rails.application.routes.draw do
  namespace :api do
    
    patch '/user_details/:id', to: 'users#update'
    delete '/users/:id', to: 'users#destroy'

    resources :login_page_slides, only: [:index, :show]
    resources :users, only: [:create, :destroy]
    resources :about_us, only: [:index, :show]
    resources :military_specializations, only: [:index, :show]
    resources :major_generals, only: [:index, :show]
    resources :platoons, only: [:index, :show]
    resources :memorials, only: [:index, :show]
    resources :technologies, only: [:index, :show]
    resources :trainings, only: [:index, :show]
    resources :soldiers, only: [:index, :show]
    resources :soldier_profiles, only: [:show]
    resources :user_comments, only: [:index, :show, :create, :destroy]
    resources :fan_messages, only: [:index, :create]
    resources :soldier_trainings, only: [:create]
    resources :community_impacts, only: [:index, :show]
    resources :client_messages, only: [:index, :create]
    resources :one_user_profiles, only: [ :show, :update]
  end

  post '/login', to: 'auth#create'
  post '/auto_login', to: 'auth#auto_login'
  get '/logged_in', to: 'application#logged_in?'
  get "/", to: "home_database#index"

end
