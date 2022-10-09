Rails.application.routes.draw do
  namespace :api do
    post '/login', to: 'sessions#create'
    delete '/logout', to: 'sessions#destroy'

    post '/signup', to: 'users#create'
    get '/me', to: 'users#show'

    resources :login_page_slides, only: [:index, :show]
    resources :about_us, only: [:index, :show]
    resources :military_specializations, only: [:index, :show]
    resources :major_generals, only: [:index, :show]
    resources :platoons, only: [:index, :show]
    resources :memorials, only: [:index, :show]
    resources :technologies, only: [:index, :show]
    resources :trainings, only: [:index, :show]
    resources :soldiers, only: [:index, :show]
    resources :soldier_profiles, only: [:show]
    resources :user_profiles, only: [:show, :update, :destroy]
    resources :user_comments, only: [:index, :show, :create, :destroy]
    resources :fan_messages, only: [:create]
    resources :soldier_trainings, only: [:create]
    resources :community_impacts, only: [:index, :show]
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
