Rails.application.routes.draw do
  resources :markets
  resources :comments
  resources :stocks
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
