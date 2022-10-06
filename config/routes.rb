Rails.application.routes.draw do
  namespace :api do
    resources :login_page_slides, only: [:index, :show]
    resources :about_us, only: [:index, :show]
  end
  
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
