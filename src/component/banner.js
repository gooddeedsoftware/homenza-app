import React from "react"
import '../assets/css/bootstrap.min.css';
import banner from '../assets/img/banner.webp'

function Banner() {
  return (
    <div className="banner py-5">
      <div className="container-fluid px-lg-5">
        <div className="row">
          <div className="col-lg-12 col-md-12 position-relative">
            <div id="demo" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src={banner} alt="" className="w-100 rounded-3" />
                  <div className="carousel-caption">
                    <h1 className="mb-3">Multiple options. <br />Zero judgments passed.</h1>
                    <p>Co-ed. Girls-only. Boys-only. All types of residences available.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={banner} alt="" className="w-100 rounded-3" />
                  <div className="carousel-caption">
                    <h1 className="mb-3">Multiple options. <br />Zero judgments passed.</h1>
                    <p>Co-ed. Girls-only. Boys-only. All types of residences available.</p>
                  </div>
                </div>
                <div className="carousel-item">
                  <img src={banner} alt="" className="w-100 rounded-3" />
                  <div className="carousel-caption">
                    <h1 className="mb-3">Multiple options. <br />Zero judgments passed.</h1>
                    <p>Co-ed. Girls-only. Boys-only. All types of residences available.</p>
                  </div>
                </div>
              </div>
              {/* Indicators/dots */}
              <div className="carousel-indicators">
                <button type="button" data-bs-target="#demo" data-bs-slide-to="0" className="active"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
              </div>
            </div>
            {/* Your search-slider and banner-card code can be added here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
