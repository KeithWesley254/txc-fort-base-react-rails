class ShowUserSerializer < ActiveModel::Serializer
  attributes :id, :email

  has_many :user_comments
  has_many :fan_messages
end
