class SoldierSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :age, :gender

  has_many :fan_messages
end
