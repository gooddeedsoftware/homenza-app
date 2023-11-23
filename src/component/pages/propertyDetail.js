import React from "react"

function PropertyDetail() {
    return (
        <>
            <div class="container-fluid px-lg-5 pt-4 pb-5">
                <nav  style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                    <ol class="breadcrumb ">
                        <li class="breadcrumb-item"><a href="#">Homenza</a></li>
                        <li class="breadcrumb-item"><a href="#">Chennai</a></li>
                        <li class="breadcrumb-item"><a href="#">PG in City</a></li>
                        <li class="breadcrumb-item active " aria-current="page">Eugene House</li>
                    </ol>
                </nav>
            </div>
            <div class="house-section">
                <div class="container-fluid px-lg-5">
                    <div class="row mb-4">
                        <div class="col-lg-7 col-md-8">
                            <h2 class="fw-bold mb-0 heading fs-2 d-flex align-items-center">Eugene House <span class="badge">Unisex</span></h2>
                            <p class="sub-text">Eugene House, Unnamed Road, Chembarambakkam, Poonamallee, Chennai</p>
                        </div>
                        <div class="col-lg-5 col-md-4 text-end">
                            <p class="text-end fs-4">
                                <a href="" class="text-dark me-2"><i class="fa fa-share"></i></a>
                                <a href="" class="text-dark"><i class="fa fa-heart-o"></i></a>
                            </p>
                            {/* <p>
                                <a href="" class="text-primary fs-5 fw-bold"><i class="fa fa-map-marker"></i> Show on Map</a>
                            </p> */}
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-7 col-md-8">
                            <div class="owl-carousel owl-theme house-gallery-slider mb-3">
                                <div class="item">
                                    <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/v1613119932/Website/CMS-Uploads/mez5xzcayynyv80ef1lk.jpg" alt="" class="rounded-4" />
                                </div>
                                <div class="item">
                                    <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/v1613119932/Website/CMS-Uploads/mez5xzcayynyv80ef1lk.jpg" alt="" class="rounded-4" />
                                </div>
                                <div class="item">
                                    <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/v1613119932/Website/CMS-Uploads/mez5xzcayynyv80ef1lk.jpg" alt="" class="rounded-4" />
                                </div>
                                <div class="item">
                                    <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/v1613119932/Website/CMS-Uploads/mez5xzcayynyv80ef1lk.jpg" alt="" class="rounded-4" />
                                </div>
                                <div class="item">
                                    <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/v1613119932/Website/CMS-Uploads/mez5xzcayynyv80ef1lk.jpg" alt="" class="rounded-4" />
                                </div>
                            </div>
                            <span class="bg-primary px-3 py-1 text-white">Almost Full</span>
                            <div class="tour-box mt-4">
                                <label for="">Start From</label>
                                <h1 class="fw-bold">₹9,199/mo*</h1>
                                <label for="" class="mb-4">*Denotes starting price exclusive of GST. Prices may vary with room occupancy and attributes.</label>
                                <div class="row">
                                    <div class="col-12 mb-3">
                                        <h4>Virtual Tour</h4>
                                    </div>
                                    <div class="col-6">
                                        <div class="video-box" data-bs-toggle="modal" data-bs-target="#Videomodal">
                                            <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/v1613119932/Website/CMS-Uploads/mez5xzcayynyv80ef1lk.jpg" alt="" class="rounded-4 w-100" />
                                                <i class="fa fa-play-circle"></i>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="video-box" data-bs-toggle="modal" data-bs-target="#Videomodal">
                                            <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/e_improve/e_sharpen:10/e_saturation:10/v1613119932/Website/CMS-Uploads/mez5xzcayynyv80ef1lk.jpg" alt="" class="rounded-4 w-100" />
                                                <i class="fa fa-play-circle"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tab-bar">
                                <a href="#one" class="active">Occupancy</a>
                                <a href="#two">Amenities</a>
                                <a href="#three">Details</a>
                            </div>
                            <div class="tabs-content" id="one">
                                <p class="title mb-4">Available Occupancies</p>
                                <div class="row">
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="available-box text-center my-4">
                                            <span class="bed-badge">
                                                <i class="fa fa-bed"></i> X <strong>2</strong>
                                            </span>
                                            <p class="mb-1">Double Occupancy</p>
                                            <h6><strong>₹9,199/mo*</strong></h6>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="available-box text-center my-4">
                                            <span class="bed-badge">
                                                <i class="fa fa-bed"></i> X <strong>2</strong>
                                            </span>
                                            <p class="mb-1">Double Occupancy</p>
                                            <h6><strong>₹9,199/mo*</strong></h6>
                                        </div>
                                    </div>
                                    <div class="col-md-4 col-sm-6 col-6">
                                        <div class="available-box text-center my-4">
                                            <span class="bed-badge">
                                                <i class="fa fa-bed"></i> X <strong>2</strong>
                                            </span>
                                            <p class="mb-1">Double Occupancy</p>
                                            <h6><strong>₹9,199/mo*</strong></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="tabs-content" id="two">
                                <p class="title mb-4">Amenities</p>
                                <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Atteched Bathroom</a>
                                <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Atteched Bathroom</a>
                                <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Atteched Bathroom</a>
                                <div class="pt-4">
                                    <p class="title mb-4">Service</p>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                    <a href="" class="tab-btn me-3 mb-3"><i class="fa fa-home"></i> Hot and Delicious Meals</a>
                                </div>
                            </div>
                            <div class="tabs-content" id="three">
                                <p class="title mb-4">Food Menu</p>
                                <div class="food-menu-box ">
                                    <div class="row m-0">
                                        <div class="col-lg-2 col-md-3 bg-white text-center tab-list-box ">
                                            <h6 class="head-title mb-0">Days</h6>
                                            <p>Mon - Sun</p>
                                            <ul class="nav nav-pills d-block">
                                                <li class="nav-item">
                                                    <a class="nav-link active" data-bs-toggle="pill" href="#day1">Day 1</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#day2">Day 2</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#day3">Day 3</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#day4">Day 4</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#day5">Day 5</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#day6">Day 6</a>
                                                </li>
                                                <li class="nav-item">
                                                    <a class="nav-link" data-bs-toggle="pill" href="#day7">Day 7</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <div class="col-lg-10 col-md-9 p-0">
                                            <div class="tab-content">
                                                <div class="tab-pane active" id="day1">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Breakfast</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Dinner</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="day2">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Breakfast</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Dinner</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="day3">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Breakfast</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Dinner</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="day4">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Breakfast</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Dinner</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="day5">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Breakfast</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Dinner</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="day6">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Breakfast</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Dinner</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="tab-pane" id="day7">
                                                    <div class="row">
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Breakfast</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                                <p>Coffee</p>
                                                            </div>
                                                        </div>
                                                        <div class="col-lg-4 col-md-4 col-sm-6 text-center">
                                                            <h6 class="head-title mb-0">Dinner</h6>
                                                            <p>06:30 - 08:00</p>
                                                            <div class="menu-list">
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                                <p>Rice</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-4 ps-lg-5">
                            <div class="login-forms">
                                <ul class="nav nav-pills mb-3">
                                    <li class="nav-item">
                                        <a class="nav-link active" data-bs-toggle="pill" href="#Schedule">Schedule a Visit</a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" data-bs-toggle="pill" href="#Request">Request a callback</a>
                                    </li>
                                </ul>
                                <div class="tab-content">
                                    <div class="tab-pane active" id="Schedule">
                                        <form action="">
                                            <div class="action-box mb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group d-flex align-items-center">
                                                            <span class="d-flex align-items-center border-end pe-2 ">
                                                                <img src="assets/img/tiranga.jpg" alt="" width="35" class="me-2 " /> +91
                                                            </span>
                                                            <input type="text" class="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <span class="form-label">We are accepting bookings for stay duration of minimum 3 months</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-2">
                                                <p class="mb-0 "><span class="d-flex align-items-center "> <i class="fa fa-whatsapp me-2"></i> Get updates over WhatsApp</span></p>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked />
                                                        <label class="form-check-label" for="mySwitch"></label>
                                                </div>
                                            </div>
                                            <div class="form__privacy d-flex align-items-center mb-3">
                                                <input id="checkbox" name="checkbox" type="checkbox" required />
                                                    <label for="checkbox" class="ps-2">I have read and agreed to the <a href="">Terms & Conditions</a> and <a href="">Privacy Policy</a></label>
                                            </div>
                                            <input type="submit" class="submit-btn" value="Schedule a Visit" />

                                        </form>
                                    </div>
                                    <div class="tab-pane fade" id="Request">
                                        <form action="">
                                            <div class="action-box mb-3">
                                                <div class="row">
                                                    <div class="col-12">
                                                        <div class="form-group">
                                                            <input type="text" class="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                    <div class="col-12">
                                                        <div class="form-group d-flex align-items-center">
                                                            <span class="d-flex align-items-center border-end pe-2 ">
                                                                <img src="assets/img/tiranga.jpg" alt="" width="35" class="me-2 " /> +91
                                                            </span>
                                                            <input type="text" class="form-control" placeholder="Name" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="d-flex align-items-center justify-content-between mb-2">
                                                <p class="mb-0 "><span class="d-flex align-items-center "> <i class="fa fa-whatsapp me-2"></i> Get updates over WhatsApp</span></p>
                                                <div class="form-check form-switch">
                                                    <input class="form-check-input" type="checkbox" id="mySwitch" name="darkmode" value="yes" checked />
                                                        <label class="form-check-label" for="mySwitch"></label>
                                                </div>
                                            </div>
                                            <div class="form__privacy d-flex align-items-center mb-3">
                                                <input id="checkbox" name="checkbox" type="checkbox" required />
                                                    <label for="checkbox" class="ps-2">I have read and agreed to the <a href="">Terms & Conditions</a></label>
                                            </div>
                                            <input type="submit" class="submit-btn" value="Request a callback" />

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade filter_modal" id="Videomodal">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content has-shadow">
                        <div class="modal-body">
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                            <video src="" width="100%" height="300px" class="rounded-3"></video>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PropertyDetail;
