import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dshboard";
import "./index.css";
import AboutMohsan from "./AboutMohsan";


function App() {
  return (
    <div className="container">
        <NavLink to={'/mohsan'}>Go to Mohsan's Profile</NavLink>
      <Sidebar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/mohsan" element={<AboutMohsan />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
