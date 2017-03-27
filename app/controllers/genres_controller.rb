class GenresController < ApplicationController

  def index
    @genres = Genre.all
  end

  def new
    @genre = Genre.new
  end

  def create
    @genre = Genre.new(genre_params)
    if @genre.save
      flash[:success] = "You have successfully created an genre!"
      redirect_to genres_path
      else
        flash[:alert] = "Oops...your genre was not saved."
      end
   end

   private

  def genre_params
  params.require(:genre).permit(:genre_name)
  end

end
