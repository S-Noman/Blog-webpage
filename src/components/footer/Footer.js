import React from "react";

const Footer = () => {
async function postData(url = 'https://www.wp-course.site/wp-json/youthink/subscribe', data = {}) {
    const response = await fetch(url, {
      method: 'POST', 
      mode: 'cors', 
      cache: 'no-cache',
      credentials: 'same-origin', 
      headers: {
        'Content-Type': 'application/json'
      },
      redirect: 'follow', 
      referrerPolicy: 'no-referrer', 
      body: JSON.stringify(data) 
    });
    return response.json(); 
  }

//   postData('https://www.wp-course.site/wp-json/youthink/subscribe', { answer: 42 })
//     .then(data => {
//       console.log(data); 
//     });
  

  return (
    <footer className="page-footer font-small indigo">
      <div className="container text-center text-md-left">
        <div className="row">
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
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-3 mb-4">
            <form className="input-group">
              <input
                type="text"
                className="form-control form-control-sm"
                placeholder="Your email"
                aria-label="Your email"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button
                  className="btn btn-sm btn-outline-white my-0"
                  type="button" onClick={postData}
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
