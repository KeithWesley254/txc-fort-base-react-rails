class MajorGeneralSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :bio, :gender, :interests, :favourite_foot, :age

  has_many :soldiers
end
