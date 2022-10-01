import React from "react";
import { Routes, Route } from "react-router-dom";
import HoursPage from "./HoursPage";
import Hours from "./HoursPage";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HoursPage />} />
      {/* <Route path="/projects" element={<Projects />} /> */}
      <Route />
    </Routes>
  );
}

export default AllRoutes;
