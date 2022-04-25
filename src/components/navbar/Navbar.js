import React from "react";
import { Link, Outlet } from "react-router-dom";
// import './Navbar.css'
import logo from "./logo.svg";
import Footer from "../footer/Footer";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/" href="#">
            <img src={logo} alt="" height="50" />
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                to="/"
                className="nav-link active"
                aria-current="page"
                href="#"
                style={{ color: "white" }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="./blog"
                className="nav-link"
                href="#"
                style={{ color: "white" }}
              >
                Blog
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
