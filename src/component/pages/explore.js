import React from "react"

function Explore({ closeModal }) {
    return (
        <div class="modal fade" id="myModal">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content rounded-4">
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                    <div class="modal-body p-4 pt-5 rounded-4">
                        <div class="search-slider mb-3 px-4 py-3">
                            <form action="">
                                <div class="row">
                                    <div class="col-lg-5 col-md-5 pe-md-4">
                                        <label>Choose Property Type</label>
                                        <select class="search-input">
                                            <option value="">Type 1</option>
                                            <option value="">Type 2</option>
                                            <option value="">Type 3</option>
                                        </select>
                                    </div>
                                    <div class="col-lg-7 col-md-7 ps-4 d-flex align-items-center justify-content-between has-border">
                                        <div>
                                            <label>Find in and arround...</label>
                                            <input type="text" class="search-input" placeholder="Enter Collage/Office/local.." />
                                        </div>
                                        <a href="" class="location-selector">
                                            <i class="fa fa-crosshairs"></i>
                                        </a>
                                        <input type="submit" value="Search" class="search-btn" />
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="popular-cities">
                            <h5>Popular Cities</h5>
                            <div class="owl-carousel owl-theme cities-slider">
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                                <div class="item text-center">
                                    <div class="img-div">
                                        <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto/v1582114420/NewWebsite/cities/bengaluru.png" alt="" />
                                    </div>
                                    <p>Bengaluru</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Explore;
