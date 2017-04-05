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

  def create
    @mix = Mix.new(mix_params)
    if @mix.save
      flash[:success] = "You have successfully created an mix!"
      redirect_to @mix
      else
        flash[:alert] = "Oops...your mix was not saved."
      end
  end

  def show
    @mix = Mix.find(params[:id])
  end





  private

  def mix_params
  params.require(:mix).permit(:mix_title, :dj_id ,:genre_id, :mix_mp3, :mp3_url_file_name, :mix_image)
  end

end
