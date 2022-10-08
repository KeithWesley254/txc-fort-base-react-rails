class User < ApplicationRecord
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, length: { in: 8..15 }

    has_secure_password
    has_one :user_profile, dependent: :destroy
    has_many :user_comments, dependent: :destroy
end
