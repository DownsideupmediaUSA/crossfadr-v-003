module DjsHelper
  def display_dj(mix)
    link_to mix.dj.dj_name, dj_path(mix.dj)
  end
end
