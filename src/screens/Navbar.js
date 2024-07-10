import React from "react";
// import { NavLink } from "react-router-dom";
import "./nav.css"
import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = {
    textDecoration: "none",
  };

  const listStyle = {
    margin: 10,
  };
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link active" href="#">
              Home
            </a> */}
            <NavLink to={"/"} style={linkStyle}>Home</NavLink>
          </li>
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link" href="#">
              About
            </a> */}
            <NavLink to={"/About"} style={linkStyle}>About</NavLink>
          </li>
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link" href="#">
              Settings
            </a> */}
            <NavLink to={"/Setting"} style={linkStyle}>Setting</NavLink>
          </li>
          <li className="nav-item" style={listStyle}>
            {/* <a className="nav-link" href="#">
              Contact
            </a> */}
            <NavLink to={"/Contact"} style={linkStyle}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;