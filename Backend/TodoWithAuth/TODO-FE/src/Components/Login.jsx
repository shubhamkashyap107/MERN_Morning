import React, { useState } from "react";
import axios from "axios"
import toast from 'react-hot-toast';
import {useDispatch} from "react-redux"
import { addUserData } from "../Utils/UserSlice";
import {useNavigate} from "react-router-dom"

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch  = useDispatch()
  const nav = useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">
        
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Login
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="shubhamxkashyap"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
          />
        </div>

        {/* Login Button */}
        <button
        onClick={() => {
            async function loginUser() {
              try {
                
                const res = await axios.post(`${import.meta.env.VITE_DOMAIN}/user/login`, {
                    username, password
                },{withCredentials : true}
            )
            
            dispatch(addUserData(res.data.data))
              nav("/")

                console.log(res)
              } catch (error) {
                console.log(error)
                toast.error("Invalid Credentials")
              }
            }
            loginUser()
        }}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl shadow-md transition-transform transform hover:scale-[1.02] active:scale-[0.98]"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
