import React from 'react'
import { Navigate } from 'react-router-dom'
import { UserAuth } from '../Components/RequiredAuth/Context /AuthContext'




export default function RestrictedRoute({children}) {
         const {user}=UserAuth()
         if(!user)
         {
             return <Navigate to={"/signin"}/>
         }

  return children
  
}
