class MemorialSerializer < ActiveModel::Serializer
  attributes :id, :name, :title, :image_url, :age, :description
end
