import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Sidebar";
import Dashboard from "./Dshboard";
import "./index.css";
import AboutMohsan from "./AboutMohsan";


function App() {
  return (
    <div className="container">
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
