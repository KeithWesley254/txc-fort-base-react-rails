class User < ActiveRecord::Base
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, length: { minimum: 8 }

    has_secure_password
    has_many :user_comments, dependent: :destroy
    has_one :one_user_profile, dependent: :destroy
    has_many :fan_messages, dependent: :destroy

    after_create :profile

    def profile
        UserProfile.create(
          email: self.email,
          user_id: self.id
        )
    end  
    
end
