Rails.application.routes.draw do
  root "application#index"
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do
    get '/users/sign_out' => 'devise/sessions#destroy'
  end

  get 'dj/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
    get 'api/comments', to: 'comments#api_index'
    get 'api/mixes', to: 'mixes#api_index'
    get 'api/mixes/:id', to: 'mixes#api_show'
    # get '/assets/js/underscore.js'


    get 'api/djs', to: 'djs#api_index'
    get 'api/djs/:id', to: 'djs#api_show'



 #  namespace :api, defaults: {format: :json} do
 #   resources :mixes do
 #     resources :comments, only: [:create]
 #   end
 # end

  resources :mixes, only: [:index, :show, :new, :create, :edit, :update ] do
    resources :comments
  end

  resources :djs do
    resources :mixes
  end

  resources :users, only: [:index,:show, :new, :create, :edit, :update] do
    resources :comments , only: [:index,:show ]
  end

  resources :genres, only: [:index,:show, :new, :create, :edit, :update] do
    resources :songs, only: [:show, :index]
  end





end
