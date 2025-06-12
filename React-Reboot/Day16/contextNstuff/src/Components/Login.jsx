import React from 'react'
import { useUserDataContext } from '../Utils/UserDataContext'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const{username, password, setUsername, setPassword} = useUserDataContext()
  const navigate = useNavigate()



  return (
<div className="flex justify-center items-center min-h-screen bg-gray-100">
  <div className="w-[30vw] bg-white shadow-lg rounded-xl p-8 flex flex-col gap-6">
    <h2 className="text-2xl font-semibold text-center text-gray-800">Login</h2>
    <input
      onChange={(e) => {
        setUsername(e.target.value)
      }}
      value={username}
      className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 w-full"
      type="text"
      placeholder="Username"
    />
    <input
    value={password}
    onChange={(e) => {
      setPassword(e.target.value)
    }}
      className="rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-300 w-full"
      type="password"
      placeholder="Password"
    />
    <button
      onClick={() => {
        navigate("/home")
      }}
    className="bg-green-400 text-white font-medium py-2 rounded-lg hover:bg-green-500 transition-all">
      Log in
    </button>
  </div>
</div>

  )
}

export default Login