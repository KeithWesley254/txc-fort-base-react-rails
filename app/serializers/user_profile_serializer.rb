class UserProfileSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :email, :age, :gender, :bio, :interests, :image_upload, :favourite_military_branch
end
