Rails.application.routes.draw do
  resources :tasks, only: [:create]
end