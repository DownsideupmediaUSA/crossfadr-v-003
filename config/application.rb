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

    config.secret_key_base = '910ab098568f3780e25193cd6cdbc80140eeffdec1e1012f7ba2824ab713633f5c12890a954b63c9aff57416c9e7febdf2a683212141803d314f3ec22e2b6689'
  end
end
