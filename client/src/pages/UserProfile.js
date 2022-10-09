import React, { useEffect, useState } from 'react'

const UserProfile = ({user}) => {

  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`/api/user_profiles/${user.id}`)
    .then(r => r.json())
    .then(data => setUserData(data))
  }, [])

  console.log(userData)
  
  return (
    <div>UserProfile</div>
  )
}

export default UserProfile