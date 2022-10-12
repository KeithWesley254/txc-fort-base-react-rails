class Soldier < ApplicationRecord
    belongs_to :major_general
    belongs_to :military_specialization
    belongs_to :platoon
    has_one :soldier_profile, dependent: :destroy
    has_many :fan_messages, dependent: :destroy
end
