class ClientMessageSerializer < ActiveModel::Serializer
  attributes :id, :full_name, :professional_email, :their_message
end
