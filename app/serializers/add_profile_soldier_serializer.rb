class AddProfileSoldierSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :age, :gender

  has_one :soldier_profile
end
