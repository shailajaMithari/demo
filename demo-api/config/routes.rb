Rails.application.routes.draw do
  resources :titles do
  	collection do
	  	get '/movie', to: 'titles#movie'
	  	get '/series', to: 'titles#series'
	end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
