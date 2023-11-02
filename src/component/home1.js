import React from 'react';
import '../assets/css/bootstrap.min.css';


function Home1() {
  return (
    <div>
    <div className="home1">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img
              src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1653558760%2FWebsite%2520v5%2FBestLife%2FSection_1_Pretoria_1.jpg&w=1920&q=75"
              alt=""
              className="rounded-3 w-100 mb-3"
            />
          </div>
          <div className="col-lg-6 ps-lg-5">
            <div className="ps-lg-4">
              <h2 className="heading">
                Why Choose <br /> <span>Us</span>
              </h2>
              <p className="sub-text">
                Bring a box full of hopes, dreams, ambitions… and of course, your
                personal belongings. Everything else - furniture, appliances, food
                - has already been taken care of.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home2">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-12 mb-5">
            <h2 className="heading text-center text-white">
              <span className="text-white">Our</span> Properties
            </h2>
          </div>
          <div className="col-12">
            <ul className="nav nav-pills ">
              <li className="nav-item">
                <a className="nav-link active me-2 me-sm-4" data-bs-toggle="pill" href="#home">
                  Property Name1
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="pill" href="#menu1">
                  Property Name2
                </a>
              </li>
            </ul>

            <div className="tab-content pt-5">
              <div className="tab-pane active" id="home">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 pe-lg-5">
                    <img
                      src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1653558760%2FWebsite%2520v5%2FBestLife%2FSection_1_Pretoria_1.jpg&w=1920&q=75"
                      alt=""
                      className="rounded-3 w-100 mb-3"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 ps-lg-5">
                    <div className="property-content">
                      <p className="heading fs-2 text-white">Property Name1</p>
                      <p className="sub-text text-white mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores nulla illum autem
                        odit corrupti reiciendis laudantium. Atque ipsam, inventore distinctio obcaecati possimus porro
                        optio similique expedita impedit, est alias.
                      </p>
                      <a href="" className="btn btn-light">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="menu1">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-6 pe-lg-5">
                    <img
                      src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Cw_540%2Fv1653558760%2FWebsite%2520v5%2FBestLife%2FSection_1_Pretoria_1.jpg&w=1920&q=75"
                      alt=""
                      className="rounded-3 w-100 mb-3"
                    />
                  </div>
                  <div className="col-lg-6 col-md-6 ps-lg-5">
                    <div className="property-content">
                      <p className="heading fs-2 text-white">Property Name2</p>
                      <p className="sub-text text-white mb-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias dolores nulla illum autem
                        odit corrupti reiciendis laudantium. Atque ipsam, inventore distinctio obcaecati possimus porro
                        optio similique expedita impedit, est alias.
                      </p>
                      <a href="" className="btn btn-light">
                        Know More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home3">
      <div className="container-fluid px-lg-4">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h1 className="heading">
              The <span>spotlight</span> on us
            </h1>
            <p className="text-center sub-text">
              We don't just make second homes. We make headlines as well.
            </p>
          </div>
          <div className="col-lg-12 text-center">
            <div className="owl-carousel owl-theme brand-slider mb-5">
              <div className="item">
                <div className="logo-box">
                  <img
                    src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Fh_100%2Cf_auto%2Cq_auto%2Fv1584370742%2FNewWebsite%2Fnew_forbes_2x.png&w=1920&q=75"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <a href="" className="btn btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="home4 bg-primary">
      <div className="container">
        <div className="row align-items-center position-relative">
          <div className="col-lg-12">
            <div className="gtco-testimonials">
              <h2 className="heading text-white text-center mb-4">
                Our <span className="text-white">Testimonials</span>
              </h2>
              <div className="owl-carousel testimonials-slider owl-theme">
                <div>
                  <div className="card text-center">
                    <img
                      className="card-img-top"
                    //   src="https://images.unsplash.com/photo-1572561300743-2dd367ed0c9a?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=eyJhcHBfaWQiOjF9&ixlib=rb-1.2.1&q=50&w=300"
                      alt=""
                    />
                    <div className="card-body">
                      <h5>
                        Ronne Galle <br />
                        <span> Project Manager </span>
                      </h5>
                      <p className="card-text">
                        “ Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil
                        impedit quo minus id quod maxime placeat ”
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="home5 py-5">
      <div className="container">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 col-md-6">
            <h4 className="big-heading text-primary">
              <strong>Reach Out <br />to Us </strong>
            </h4>
            <p className="sub-text pe-lg-5">If you prefer, you can send us a message using the contact form below.</p>
          </div>
          <div className="col-lg-5 col-md-5">
            <div className="contact-form">
              <form action="">
                <div className="row">
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Name" />
                  </div>
                  <div className="col-12 mb-3">
                    <input type="text" className="form-control" placeholder="Mobile Number" />
                  </div>
                  <div className="col-12 mb-3">
                    <textarea name="" id="" rows="4" className="form-control" placeholder="Message"></textarea>
                  </div>
                  <div className="col-12">
                    <input type="input" className="w-100 btn btn-light rounded-3" value="Submit" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    
  );
}

export default Home1;
