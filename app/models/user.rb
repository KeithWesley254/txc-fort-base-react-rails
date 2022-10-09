class User < ActiveRecord::Base
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, length: { minimum: 8 }

    has_secure_password
    has_one :user_profile, dependent: :destroy
    has_many :user_comments, dependent: :destroy
    
end
