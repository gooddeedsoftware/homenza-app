import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-top">
          <div className="container-fluid px-lg-5">
            <div className="row justify-content-between">
              <div className="col-lg-2 mb-4 mb-lg-0">
                <div className="footer-content">
                  <img src={logo} width="120" alt="Logo" />
                </div>
              </div>
              <div className="col-lg-8 col-md-8 col-12 px-lg-5">
                <div className="footer-menu">
                  <div>
                    <ul className="list-unstyled" style={{ columnCount: 4 }}>
                      <li><Link  class="nav-link " to="/about">About Us</Link></li>
                      <li><Link  class="nav-link " to="/team">Our Team</Link></li>
                      {/* <li><a href="#home">Investor Relations</a></li>
                    <li><a href="#home">Media</a></li>
                    <li><a href="#home">Blogs</a></li> */}
                      <li><a href="#home">FAQs</a></li>
                      {/* <li><a href="#home">Refer and Earn</a></li> */}
                      <li><a href="#home">House Rules</a></li>
                      <li><a href="#home">T&C</a></li>
                      <li><a href="#home">Privacy Policy</a></li>
                      <li><a href="#home">Contact Us</a></li>
                      <li><a href="#home">COVID-19</a></li>
                      <li><a href="#home">Partner With Us</a></li>
                      <li><a href="#home">Cookie Policy</a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-2">
                <div className="footer-menu">
                  <p className="mb-0 text-center">
                    <a href="#home" className="m-1">
                      <i className="fa fa-facebook-square"></i>
                    </a>
                    <a href="#home" className="m-1">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#home" className="m-1">
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
                    <a href="#home" target="_blank">Web Design & Developed By Gooddeed Software Solution</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
