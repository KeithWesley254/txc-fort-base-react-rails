class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password, presence: true, length: { in: 8..12 }

    has_secure_password
    has_one :user_profile
    has_many :user_comments
end
