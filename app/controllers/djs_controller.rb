class DjsController < ApplicationController
before_action :set_dj, only: [:show, :edit, :update, :destroy, :songs_index]
  def index
    @djs = Dj.all
  end

  def new
    @dj = Dj.new
  end

  def create
    @dj = Dj.new(dj_params)
    if @dj.save
      flash[:success] = "You have successfully created an dj!"
      redirect_to djs_path
      else
        flash[:alert] = "Oops...your dj was not saved."
      end
  end

  def show
  end


  private

  def set_dj
    @dj = Dj.find(params[:id])
  end 

  def dj_params
  params.require(:dj).permit(:dj_name, :dj_image)
  end
end
