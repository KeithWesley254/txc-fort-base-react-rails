class ShowPlatoonSoldiersSerializer < ActiveModel::Serializer
  attributes :id, :name, :sphere_assigned, :skill_lvl, :ranking

  has_many :soldiers
end
