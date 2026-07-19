import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <h2>🚀 Problem Hunter AI</h2>
      </div>

      <div className="nav-links">

        <NavLink to="/">Home</NavLink>

        <NavLink to="/about">About</NavLink>

        <NavLink to="/dashboard">Dashboard</NavLink>

        <NavLink to="/login" className="login-btn">
          Login
        </NavLink>

      </div>

    </nav>
  );
}

export default Navbar;