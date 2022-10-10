class MemorialSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :image_url, :age, :description, :summary

  def summary
    self.object.description[0..40]
  end
end
