import React from "react"
import { Link } from "react-router-dom";

function Properties() {
    return (
        <>
            <div class="city-banner py-5">
                <div class="container-fluid px-lg-5 ">
                    <div id="demo" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556616%2FWebsite%2FCMS-Uploads%2FWeb_Banner_Desktop_2_fukrjc.png&w=1920&q=75" class="d-block w-100 rounded-3" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556616%2FWebsite%2FCMS-Uploads%2FWeb_Banner_Desktop_2_fukrjc.png&w=1920&q=75" class="d-block w-100 rounded-3" />
                            </div>
                            <div class="carousel-item">
                                <img src="https://www.stanzaliving.com/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fstanza-living%2Fimage%2Fupload%2Ff_auto%2Cq_auto%2Fv1688556616%2FWebsite%2FCMS-Uploads%2FWeb_Banner_Desktop_2_fukrjc.png&w=1920&q=75" class="d-block w-100 rounded-3" />
                            </div>
                        </div>
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="0" class="active"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="1"></button>
                            <button type="button" data-bs-target="#demo" data-bs-slide-to="2"></button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="all-pgs pb-5">
                <div class="container-fluid px-lg-5">
                    <nav  style={{ '--bs-breadcrumb-divider': '>' }} aria-label="breadcrumb">
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item"><a href="#">Homenza</a></li>
                            <li class="breadcrumb-item active " aria-current="page">PG in Chennai</li>
                        </ol>
                    </nav>
                    <div class="row">
                        <div class="col-lg-12 mb-5">
                            <div class="filter-button ">
                                <button class="me-2" data-bs-toggle="modal" data-bs-target="#filter-modal">Locality <i class="fa fa-angle-down ms-3"></i></button>
                                <button class="me-2" data-bs-toggle="modal" data-bs-target="#filter-modal">Budget <i class="fa fa-angle-down ms-3"></i></button>
                                <button class="me-2" data-bs-toggle="modal" data-bs-target="#filter-modal">Occupancy <i class="fa fa-angle-down ms-3"></i></button>
                                <button class="me-2" data-bs-toggle="modal" data-bs-target="#filter-modal">Gender <i class="fa fa-angle-down ms-3"></i></button>
                                <button class="me-2" data-bs-toggle="modal" data-bs-target="#filter-modal">Amenties <i class="fa fa-angle-down ms-3"></i></button>
                                <button class="me-2" data-bs-toggle="modal" data-bs-target="#filter-modal">My Wishlist <i class="fa fa-angle-down ms-3"></i></button>
                                <button class="me-2" data-bs-toggle="modal" data-bs-target="#filter-modal"><i class="fa fa-filter me-3"></i> More Filter</button>
                                <div class="dropdown">
                                    <button type="button" class="dropdown-toggle" data-bs-toggle="dropdown">
                                        Sorf By: <span>Popularity</span> <i class="fa fa-angle-down ms-3"></i>
                                    </button>
                                    <ul class="dropdown-menu w-100">
                                        <li><a class="dropdown-item" href="#">Price: Low to High</a></li>
                                        <li><a class="dropdown-item" href="#">Price: High to Low</a></li>
                                        <li><a class="dropdown-item" href="#">Price: Popularity</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-12">
                            <h4 class="mb-4"><strong>40 PGs waiting to be yours in Chennai</strong></h4>
                        </div>
                        <div class="col-lg-12 col-md-12">
                            <div class="pg-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="img-box rounded-3" data-bs-toggle="modal" data-bs-target="#galleryModal">
                                            <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/v1613119909/Website/CMS-Uploads/xtwna6hsrtef1gxsucaf.jpg" alt="" class="w-100 rounded-3" />
                                                <p>
                                                    <a href="" class="img-badge"><i class="fa fa-play-circle"></i> Video</a>
                                                    <a href="" class="img-badge"><i class="fa fa-repeat"></i> 3D Tour</a>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8">
                                        <div class="details-box">
                                            <i class="fa fa-heart-o"></i>
                                            <Link to={'/property-details'}><h4 class="title">Columbus House <span class="badge ms-3">Almost Full</span></h4></Link>
                                            <p class="mb-4">OMR</p>
                                            <div class="d-flex align-items-center justify-content-between types1 mb-4">
                                                <div class="d-flex align-items-center">
                                                    <span><i class="fa fa-users"></i> Unisex</span>
                                                    <span class="ms-4"><i class="fa fa-car"></i> Double, Triple</span>
                                                </div>

                                            </div>
                                            <div class="types2 mb-3 mb-lg-5">
                                                <label for="" class="d-block">Amenties</label>
                                                <a href="">Attached Washroom</a> <a href="">Spacious Cupboard</a>
                                            </div>
                                            <div class="types3 d-sm-flex align-items-center justify-content-between">
                                                <div>
                                                    <label for="">Start from</label>
                                                    <h4>₹9,199<sub>/mo*</sub></h4>
                                                </div>
                                                <div class="">
                                                    <a href="javascript:void()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#action-modal">SCHEDULE A VISIT</a> &nbsp;
                                                    <a href="javascript:void()" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#action-modal">REQUEST A CALLBACK</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <div class="pg-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="img-box rounded-3" data-bs-toggle="modal" data-bs-target="#galleryModal">
                                            <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/v1613119909/Website/CMS-Uploads/xtwna6hsrtef1gxsucaf.jpg" alt="" class="w-100 rounded-3" />
                                                <p>
                                                    <a href="" class="img-badge"><i class="fa fa-play-circle"></i> Video</a>
                                                    <a href="" class="img-badge"><i class="fa fa-repeat"></i> 3D Tour</a>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8">
                                        <div class="details-box">
                                            <i class="fa fa-heart-o"></i>
                                            <h4 class="title">Columbus House <span class="badge ms-3">Almost Full</span></h4>
                                            <p class="mb-4">OMR</p>
                                            <div class="d-flex align-items-center justify-content-between types1 mb-4">
                                                <div class="d-flex align-items-center">
                                                    <span><i class="fa fa-users"></i> Unisex</span>
                                                    <span class="ms-4"><i class="fa fa-car"></i> Double, Triple</span>
                                                </div>

                                            </div>
                                            <div class="types2 mb-3 mb-lg-5">
                                                <label for="" class="d-block">Amenties</label>
                                                <a href="">Attached Washroom</a> <a href="">Spacious Cupboard</a>
                                            </div>
                                            <div class="types3 d-sm-flex align-items-center justify-content-between">
                                                <div>
                                                    <label for="">Start from</label>
                                                    <h4>₹9,199<sub>/mo*</sub></h4>
                                                </div>
                                                <div class="">
                                                    <a href="javascript:void()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#action-modal">SCHEDULE A VISIT</a> &nbsp;
                                                    <a href="javascript:void()" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#action-modal">REQUEST A CALLBACK</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <div class="pg-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="img-box rounded-3" data-bs-toggle="modal" data-bs-target="#galleryModal">
                                            <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/v1613119909/Website/CMS-Uploads/xtwna6hsrtef1gxsucaf.jpg" alt="" class="w-100 rounded-3" />
                                                <p>
                                                    <a href="" class="img-badge"><i class="fa fa-play-circle"></i> Video</a>
                                                    <a href="" class="img-badge"><i class="fa fa-repeat"></i> 3D Tour</a>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8">
                                        <div class="details-box">
                                            <i class="fa fa-heart-o"></i>
                                            <h4 class="title">Columbus House <span class="badge ms-3">Almost Full</span></h4>
                                            <p class="mb-4">OMR</p>
                                            <div class="d-flex align-items-center justify-content-between types1 mb-4">
                                                <div class="d-flex align-items-center">
                                                    <span><i class="fa fa-users"></i> Unisex</span>
                                                    <span class="ms-4"><i class="fa fa-car"></i> Double, Triple</span>
                                                </div>

                                            </div>
                                            <div class="types2 mb-3 mb-lg-5">
                                                <label for="" class="d-block">Amenties</label>
                                                <a href="">Attached Washroom</a> <a href="">Spacious Cupboard</a>
                                            </div>
                                            <div class="types3 d-sm-flex align-items-center justify-content-between">
                                                <div>
                                                    <label for="">Start from</label>
                                                    <h4>₹9,199<sub>/mo*</sub></h4>
                                                </div>
                                                <div class="">
                                                    <a href="javascript:void()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#action-modal">SCHEDULE A VISIT</a> &nbsp;
                                                    <a href="javascript:void()" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#action-modal">REQUEST A CALLBACK</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <div class="pg-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="img-box rounded-3" data-bs-toggle="modal" data-bs-target="#galleryModal">
                                            <img src="https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/v1613119909/Website/CMS-Uploads/xtwna6hsrtef1gxsucaf.jpg" alt="" class="w-100 rounded-3" />
                                                <p>
                                                    <a href="" class="img-badge"><i class="fa fa-play-circle"></i> Video</a>
                                                    <a href="" class="img-badge"><i class="fa fa-repeat"></i> 3D Tour</a>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8">
                                        <div class="details-box">
                                            <i class="fa fa-heart-o"></i>
                                            <h4 class="title">Columbus House <span class="badge ms-3">Almost Full</span></h4>
                                            <p class="mb-4">OMR</p>
                                            <div class="d-flex align-items-center justify-content-between types1 mb-4">
                                                <div class="d-flex align-items-center">
                                                    <span><i class="fa fa-users"></i> Unisex</span>
                                                    <span class="ms-4"><i class="fa fa-car"></i> Double, Triple</span>
                                                </div>

                                            </div>
                                            <div class="types2 mb-3 mb-lg-5">
                                                <label for="" class="d-block">Amenties</label>
                                                <a href="">Attached Washroom</a> <a href="">Spacious Cupboard</a>
                                            </div>
                                            <div class="types3 d-sm-flex align-items-center justify-content-between">
                                                <div>
                                                    <label for="">Start from</label>
                                                    <h4>₹9,199<sub>/mo*</sub></h4>
                                                </div>
                                                <div class="">
                                                    <a href="javascript:void()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#action-modal">SCHEDULE A VISIT</a> &nbsp;
                                                    <a href="javascript:void()" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#action-modal">REQUEST A CALLBACK</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr class="my-4" />
                            <div class="pg-box">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <div class="img-box rounded-3" data-bs-toggle="modal" data-bs-target="#galleryModal">
                                            <img src=" https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:30/v1613119909/Website/CMS-Uploads/xtwna6hsrtef1gxsucaf.jpg" alt="" class="w-100 rounded-3" />
                                                <p>
                                                    <a href="" class="img-badge"><i class="fa fa-play-circle"></i> Video</a>
                                                    <a href="" class="img-badge"><i class="fa fa-repeat"></i> 3D Tour</a>
                                                </p>
                                        </div>
                                    </div>
                                    <div class="col-lg-8 col-md-8">
                                        <div class="details-box">
                                            <i class="fa fa-heart-o"></i>
                                            <h4 class="title">Columbus House <span class="badge ms-3">Almost Full</span></h4>
                                            <p class="mb-4">OMR</p>
                                            <div class="d-flex align-items-center justify-content-between types1 mb-4">
                                                <div class="d-flex align-items-center">
                                                    <span><i class="fa fa-users"></i> Unisex</span>
                                                    <span class="ms-4"><i class="fa fa-car"></i> Double, Triple</span>
                                                </div>

                                            </div>
                                            <div class="types2 mb-3 mb-lg-5">
                                                <label for="" class="d-block">Amenties</label>
                                                <a href="">Attached Washroom</a> <a href="">Spacious Cupboard</a>
                                            </div>
                                            <div class="types3 d-sm-flex align-items-center justify-content-between">
                                                <div>
                                                    <label for="">Start from</label>
                                                    <h4>₹9,199<sub>/mo*</sub></h4>
                                                </div>
                                                <div class="">
                                                    <a href="javascript:void()" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#action-modal">SCHEDULE A VISIT</a> &nbsp;
                                                    <a href="javascript:void()" class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#action-modal">REQUEST A CALLBACK</a>
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

            <div class="modal fade" id="galleryModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-xl bg-transparent border-0 rounded-0">
                    <div class="modal-content bg-transparent border-0 rounded-0">
                        <div class="modal-body bg-transparent border-0 rounded-0">
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>

                            <div class="row justify-content-center">
                                <div class="col-lg-10">
                                    <div class="slider-tabs mb-5">
                                        <a href="" class="active">Common Area (2)</a>
                                        <a href="">Dining Area (2)</a>
                                        <a href="">Room (2)</a>
                                    </div>
                                </div>
                                <div class="col-lg-7 col-md-7">
                                    <div class="owl-carousel owl-theme gallery-slider">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Properties;
