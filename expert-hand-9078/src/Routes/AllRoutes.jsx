import React from "react";
import { Routes, Route } from "react-router-dom";
import BlogsPage from "../Components/Pages/BlogsPage";
import IntegrationsPage from "../Components/Pages/IntegrationsPage";
import Hours from "./HoursPage";

function AllRoutes() {
  return (
    <Routes>
      {/* <Route path="/" element={<Hours />} />
      <Route path="/projects" element={<Projects />} />
      <Route /> */}
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
