class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  
  respond_to :json


  def home
    render 'layouts/application'
  end

  def authenticate_user!
    token, options = ActionController::HttpAuthentication::Token.token_and_options(request)

    email = options.blank? ? nil : options[:email]
    user = email && User.find_by(email: email)

    if user && ActiveSupport::SecurityUtils.secure_compare(user.authentication_token, token)
      @current_user = user
    else
      render json: { status: 401, message: "unauthorized" }, status: :unauthorized
    end
  end


  def verified_request?
    super || valid_authenticity_token?(session,
    request.headers['X-XSRF-TOKEN'])
  end
end
