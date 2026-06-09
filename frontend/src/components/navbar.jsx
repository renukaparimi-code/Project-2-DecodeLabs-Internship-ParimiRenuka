import { Link } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {

  return (
    <nav className="navbar">

      <h1 className="logo">
        NeuroConnect
      </h1>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <Link to="/explorer">Explorer</Link>

        <Link to="/admin">Admin</Link>

      </div>

    </nav>
  );
}

export default Navbar;