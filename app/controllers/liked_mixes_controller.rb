class LikedMixesController < ApplicationController
 #before_action :authenticate_user!
 before_action :set_mix


 def create
   new_like = @current_user.liked_mixes.new(mix: @mix)

   if new_like.save
     @mix.reload
     render json: {message: 'success', mix_likes: @mix.liked_mixes.count}, status: 200
   else
     render json: {message: 'error'}, status: 500
   end
 end

 def destroy
   like = @current_user.liked_mixes.find_by(mix_id: params[:mix_id])

   if like.destroy
     render json: {message: 'success', mix_likes: @mix.liked_mixes.count}, status: 200
   else
     render json: {message: 'error'}, status: 500
   end
 end

private
def set_mix
  @current_user = User.find(1)
  @mix = Mix.find_by(id: params[:mix_id])
end

end
