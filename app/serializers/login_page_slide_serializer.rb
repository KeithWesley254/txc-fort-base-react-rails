class LoginPageSlideSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :summary, :image_url

  def summary
    "#{self.object.description[0..160]}..."
  end

end
