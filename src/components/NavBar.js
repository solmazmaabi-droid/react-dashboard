import React from "react";

export default function NavBar() {
  return (
    <nav className="navbar">
      <h2>React Dashboard</h2>
      <div className="menu">
        <a href="#">Dashboard</a>
        <a href="#">Reports</a>
        <a href="#">Settings</a>
      </div>
    </nav>
  );
}
