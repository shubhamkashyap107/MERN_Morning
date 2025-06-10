import React from 'react'
import { useSearchParams } from 'react-router-dom'




const Profile = () => {

  const[obj, setObj] = useSearchParams()
  const name = obj.get("name")
  const age = obj.get("age")



  return (
    <div>
      <p>{name} - {age}</p>
    </div>
  )
}

export default Profile