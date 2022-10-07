class TrainingSerializer < ActiveModel::Serializer
  attributes :id, :title, :image_url, :description, :duration_in_hours, :instructor_name
end
