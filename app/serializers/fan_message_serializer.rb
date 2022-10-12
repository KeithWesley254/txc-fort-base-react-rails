class FanMessageSerializer < ActiveModel::Serializer
  attributes :id, :message, :user_id, :soldier_id
end
