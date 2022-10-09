class User < ActiveRecord::Base
    validates :email, presence: true, uniqueness: true
    validates :password_digest, presence: true, length: { minimum: 8 }

    has_secure_password
    has_one :user_profile, dependent: :destroy
    has_many :user_comments, dependent: :destroy
    
    after_create do
        def build_profile
            UserProfile.create!(id: self.id, full_name: self.full_name, email: self.email)
        end
    end
    
end
