class UserSerializer < ActiveModel::Serializer
  attributes :id, :email, :is_admin?

  has_one :one_user_profile
end
