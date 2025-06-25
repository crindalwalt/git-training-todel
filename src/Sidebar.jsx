import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>My Dashboard</h2>
      <ul>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
