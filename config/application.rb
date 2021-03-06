require_relative 'boot'

require 'rails/all'

# # config/application.rb
# Bundler.require(*Rails.groups)
#
# Dotenv::Railtie.load 

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module CrossfadrV002
  class Application < Rails::Application
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers

    config.secret_key_base = ENV['SECRET_KEY_BASE']
  end
end
