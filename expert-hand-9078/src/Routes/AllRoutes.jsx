import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogsPage from "../Components/Pages/BlogsPage";
import IntegrationsPage from "../Components/Pages/IntegrationsPage";
import Homepage from "../Components/Pages/HomePage/Homepage";
import Account from "../Components/SignUp/Account";
import SignIn from "../Components/SignUp/Signin";
import SignUp from "../Components/SignUp/SignUp";
import Hours from "./HoursPage";
import RestrictedRoute from "./RestrictedRoutes";

function AllRoutes() {
  return (
    <Routes>
     <Route path="/" element={<Homepage/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          {/* <Route path="/account" element={<RestrictedRoute><Account/></RestrictedRoute>}/> */}
      <Route path="/account" element={<RestrictedRoute><Hours /></RestrictedRoute>} />
      <Route 
      path="/integrations"
      element={<IntegrationsPage />}
      />
      <Route 
      path="/blogs"
      element={<BlogsPage />}
      />
    </Routes>
  );
}

export default AllRoutes;
