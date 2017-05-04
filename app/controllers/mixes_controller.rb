class MixesController < ApplicationController

  def index
    @mixes = Mix.all
  end

  def api_index
    @mixes = Mix.all
    render json: @mixes
  end

  def api_show
    @mix = Mix.find(params[:id])
    render json: @mix
  end

  def new
    @mix = Mix.new
  end

  def liked_mix
      @mix = Mix.find(params[:id])

  end

  def create

    @mix = Mix.new(mix_params)
     #binding.pry 
    respond_to do |format|
      if @mix.save
        format.json { render json: @mix, status: :created }
      else
        format.json { render json: { errors: @mix.errors }, status: :bad_request }
      end
    end
  end

  def show
    @mix = Mix.find(params[:id])
  end

  private

  def mix_params
    params.require(:mix).permit(:mix_title, :dj_id, :genre_id, :mix_mp3, :mix_image, :mix_image_file_name)
  end

end
