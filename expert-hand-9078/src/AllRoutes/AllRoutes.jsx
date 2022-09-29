import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
import Account from '../SignUp/Account'
import SignIn from '../SignUp/Signin'
import SignUp from '../SignUp/SignUp'
import RestrictedRoute from './RestrictedRoute'

export default function Navbar() {
  return (
    <div>
     <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/account" element={<RestrictedRoute><Account/></RestrictedRoute>}/>
        </Routes>

    </div>
  )
}
