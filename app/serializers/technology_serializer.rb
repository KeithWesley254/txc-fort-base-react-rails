class TechnologySerializer < ActiveModel::Serializer
  attributes :id, :title, :author, :image_url, :description, :date_written
end
