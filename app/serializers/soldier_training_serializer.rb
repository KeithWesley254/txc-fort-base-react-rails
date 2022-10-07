class SoldierTrainingSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :gender

  def id
    self.object.soldier.id
  end

  def name
    self.object.soldier.name
  end

  def age
    self.object.soldier.age
  end

  def gender
    self.object.soldier.gender
  end
end
