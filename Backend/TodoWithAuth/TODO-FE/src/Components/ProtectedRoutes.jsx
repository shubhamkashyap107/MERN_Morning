import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Meta, Navigate, Outlet } from 'react-router-dom'
import Loaders from './Loaders'
import axios from 'axios'
import { addUserData } from '../Utils/UserSlice'


const ProtectedRoutes = () => {


    const userSliceData = useSelector(store => store.user)
    const dispatch = useDispatch()

    useEffect(() => {
      if(!userSliceData)
      {
      async function getData(params) {
        try {
          const res = await axios.get(`${import.meta.env.VITE_DOMAIN}/user/get-user-data`, {withCredentials : true})
          // console.log(res)
        dispatch(addUserData(res.data.data))
        } catch (error) {
          window.location = "/login"
        }

      }
      getData()
      }

    }, [])
    

    if(!userSliceData?.username)
    {
      return <Loaders />
    }
    

  return userSliceData.username ? <Outlet /> : <Navigate to={"/login"} />
}

export default ProtectedRoutes