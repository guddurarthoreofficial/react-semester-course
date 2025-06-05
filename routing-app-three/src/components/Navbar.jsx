import { Link } from "react-router-dom";
import './Navbar.css'; 

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="logo">
        <h1>LOGO</h1>
      </div>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/login">LOGIN</Link>
        <Link to="/about">ABOUT</Link>
      </div>
    </div>
  );
};

export default Navbar;
