module Api
  module V1
    class MixesController < ApplicationController

      def index
        mixes = Mix.all
        render json: mixes, status: :ok
      end

      def show
        mix = Mix.find(params[:id])
        render json: mix
      end

      def create
        mix = Mix.new(mix_params)
          if mix.save
            render json: mix, status: :created
          else
            render json: { errors: mix.errors }, status: :bad_request
          end
        end
      end

      private

      def mix_params
        params.permit(:mix_title, :dj_id ,:genre_id, :mix_mp3, :mp3_url_file_name, :mix_image)
      end

    end
  end
end
