class SoldierProfileSerializer < ActiveModel::Serializer
  attributes :id, :name, :platoon, :gender, :bio, :interests, :image_url, :image_url_2, :favourite_foot, :military_spec

  def platoon
    self.object.soldier.platoon
  end

  def military_spec
    self.object.soldier.military_specialization
  end

end
