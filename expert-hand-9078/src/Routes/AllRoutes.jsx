import React from "react";
import { Routes, Route } from "react-router-dom";
import Hours from "./HoursPage";
import Projects from "./Projects";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Hours />} />
      <Route path="/projects" element={<Projects />} />
      <Route />
    </Routes>
  );
}

export default AllRoutes;
