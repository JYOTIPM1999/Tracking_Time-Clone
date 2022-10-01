import React from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "../Components/Pages/HomePage/Homepage";
import Account from "../Components/SignUp/Account";
import SignIn from "../Components/SignUp/Signin";
import SignUp from "../Components/SignUp/SignUp";
import Hours from "./HoursPage";

import RestrictedRoute from './RestrictedRoutes'

function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Homepage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          {/* <Route path="/account" element={<RestrictedRoute><Account/></RestrictedRoute>}/> */}
      <Route path="/account" element={<RestrictedRoute><Hours /></RestrictedRoute>} />
 
      <Route />
    </Routes>
  );
}

export default AllRoutes;
