class MilitarySpecializationSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :sphere, :financial_investment, :commander_in_charge, :commander_image_url, :image_url

  has_many :soldiers
end
