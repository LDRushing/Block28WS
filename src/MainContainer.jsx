import React from "react";
import { Routes, Route } from "react-router-dom";
import Red from "./Red";
import Blue from "./Blue";
import Home from "./Home";

export default function MainContainer() {
  return (
    <div id="main-container">
      <Routes>
        <Route path="/red" element={<Red />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}