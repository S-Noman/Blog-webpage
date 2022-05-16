import React, { useState } from "react";
import "./Footer.css";

const Footer = () => {
  function postEmail() {
    let data = { email };

    fetch("https://www.wp-course.site/wp-json/youthink/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((data) => {
        console.log(data);
      })
      .then(() => {
        setMsg(" Thank you for subscribing !");
      });
  }

  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");

  return (
    <footer
      id="footer"
      className="page-footer font-small indigo bg-dark text-light "
    >
      <div className="container text-center text-md-left">
        <div className="row">
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4 text-light">
              Links
            </h5>
            <ul className="list-unstyled ">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-3 mx-auto">
            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#!">Link 1</a>
              </li>
              <li>
                <a href="#!">Link 2</a>
              </li>
              <li>
                <a href="#!">Link 3</a>
              </li>
              <li>
                <a href="#!">Link 4</a>
              </li>
            </ul>
          </div>
          <div className="col-md-3 pt-5 ">
            <form className="input-group">
              <div className="input-group mb-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="form-control"
                  placeholder="Provide your email"
                />
                <button
                  className="btn btn-primary"
                  type="button"
                  id="button-addon2"
                  onClick={postEmail}
                >
                  Subscribe
                </button>
              </div>
              <small>{msg}</small>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
