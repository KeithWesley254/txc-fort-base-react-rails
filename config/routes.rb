Rails.application.routes.draw do
  namespace :api do
    resources :login_page_slides, only: [:index, :show]
    resources :about_us, only: [:index, :show]
    resources :military_specializations, only: [:index, :show]
    resources :major_generals, only: [:index, :show]
    resources :platoons, only: [:index, :show]
    resources :memorials, only: [:index, :show]
    resources :technologies, only: [:index, :show]
    resources :trainings, only: [:index, :show]
    resources :soldiers, only: [:index, :show]
    resources :soldier_profiles, only: [:index, :show]
    resources :users
    resources :user_profiles
    resources :user_comments
    resources :fan_messages
    resources :soldier_trainings
    resources :community_impacts
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
