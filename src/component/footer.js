import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="footer-top">
        <div className="container-fluid px-lg-5">
          <div className="row justify-content-between">
            <div className="col-lg-2 mb-4 mb-lg-0">
              <div className="footer-content">
                <img src="assets/img/logo.png" width="120" alt="Logo" />
              </div>
            </div>
            <div className="col-lg-8 col-md-8 col-12 px-lg-5">
              <div className="footer-menu">
                <div>
                  <ul className="list-unstyled" style={{ columnCount: 4 }}>
                    <li><a href="about.php">About Us</a></li>
                    <li><a href="team.php">Team</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Media</a></li>
                    <li><a href="#">Blogs</a></li>
                    <li><a href="#">FAQs</a></li>
                    <li><a href="#">Refer and Earn</a></li>
                    <li><a href="#">House Rules</a></li>
                    <li><a href="#">T&C</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">COVID-19</a></li>
                    <li><a href="#">Partner With Us</a></li>
                    <li><a href="#">Cookie Policy</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2">
              <div className="footer-menu">
                <p className="mb-0 text-center">
                  <a href="" className="m-1">
                    <i className="fa fa-facebook-square"></i>
                  </a>
                  <a href="" className="m-1">
                    <i className="fa fa-linkedin"></i>
                  </a>
                  <a href="" className="m-1">
                    <i className="fa fa-instagram"></i>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container-fluid px-lg-5">
          <div className="row">
            <div className="col-12">
              <div className="d-block d-md-flex justify-content-between text-center">
                <p className="">
                  Copyright by Homenza Pte Ltd © <span id="year">{new Date().getFullYear()}</span>. All rights reserved
                </p>
                <p>
                  <a href="#" target="_blank">Web Design & Developed By Gooddeed Software Solution</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
