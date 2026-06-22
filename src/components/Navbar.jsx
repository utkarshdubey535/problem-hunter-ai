import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Problem Hunter AI</h2>

      <div className="nav-links">
  <a href="/">Home</a>
  <a href="/about">About</a>
  <a href="/dashboard">Dashboard</a>
  <a href="/login">Login</a>
</div>
    </nav>
  );
}

export default Navbar;