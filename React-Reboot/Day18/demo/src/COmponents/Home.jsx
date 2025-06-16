import React from 'react'
import {useUserDataContext} from "../Utils/UserDataContext"
import {useNavigate} from "react-router-dom"

const Home = () => {
  const {data} = useUserDataContext()
  const navigate = useNavigate()

  return (
    <div>

    <div className=' mt-20 gap-4 sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
      
      {data && data.map((item) => {
        return (
          <div onClick={() => {
            // navigate(`/profile?id=${item.id}`)
            navigate(`/profile/${item.id}`)
          }} className='border flex gap-2 p-2 rounded-lg border-gray-200' key={item.id}>
            <img src={item.picture} alt="" />

            <div>
              <h2>{item.name}, {item.age}</h2>
              <p>{item.bio}</p>
              
            </div>
          </div>
        )
      })}
    </div>

    </div>

  )
}

export default Home