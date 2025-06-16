import React, { useEffect, useState } from 'react'
import { useSearchParams, useParams } from "react-router-dom"
import { useUserDataContext } from "../Utils/UserDataContext"

const Profile = () => {
  // const [obj] = useSearchParams()
  // const id = obj.get("id")
  const {id} = useParams()

  const { data } = useUserDataContext()
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    const info = data.find((item) => item.id == id)
    setUser(info)
  }, [])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      {user && (
        <div className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-hidden">
          <img
            src={user.picture}
            alt={user.name}
            className="w-full h-72 object-cover"
          />
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800">
              {user.name}, <span className="text-gray-600">{user.age}</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm">{user.bio}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default Profile
