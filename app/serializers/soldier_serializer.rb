class SoldierSerializer < ActiveModel::Serializer
  attributes :id, :name, :image_url, :age, :gender
  
end
