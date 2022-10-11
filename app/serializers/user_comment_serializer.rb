class UserCommentSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :image_upload, :user_comment, :user_id
end
