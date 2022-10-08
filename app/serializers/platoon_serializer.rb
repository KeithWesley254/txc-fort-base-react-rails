class PlatoonSerializer < ActiveModel::Serializer
  attributes :id, :name, :sphere_assigned, :skill_lvl, :ranking
end
