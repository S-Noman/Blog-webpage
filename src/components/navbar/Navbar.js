import React from "react";
import { Link } from "react-router-dom";
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand"  to="/" href="#">
            <img src='https://youthink.la/wp-content/themes/youthinkadult/assets/images/footer-logo.svg' alt=" " id='logo'/>
          </Link>
        </div>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <Link
                id="link"
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
                id="link"
                to="./blog"
                className="nav-link"
                href="#"
                style={{ color: "white" }}
              >
                Blog
              </Link>
            </li>
            <li className="nav-item"></li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
