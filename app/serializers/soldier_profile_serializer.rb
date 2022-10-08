class SoldierProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :platoon, :gender, :bio, :interests, :image_url, :image_url_2, :image_url_3, :favourite_foot, :military_spec

  def platoon
    plat = []
    plat<<self.object.soldier.platoon
    plat.map do |t|
      {id: t.id, name: t.name, sphere_assigned: t.sphere_assigned, skill_lvl: t.skill_lvl, ranking: t.ranking}
    end
  end

  def military_spec
    spec = []
    spec<<self.object.soldier.military_specialization
    spec.map do |t|
      {id: t.id, title: t.title, description: t.description, commander_in_charge: t.commander_in_charge}
    end
  end

end
