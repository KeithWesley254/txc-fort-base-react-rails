class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :full_name, :age, :gender, :bio, :interests, :image_upload, :favourite_military_branch
end
