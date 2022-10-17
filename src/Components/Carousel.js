import React from "react";

import "../css/style.css";
import "../scss/bootstrap.scss";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import carouse1 from "../img/carousel-1.jpg";
import carouse2 from "../img/carousel-2.jpg";

const handleDragStart = (e) => e.preventDefault();

const responsive = {
  400: { items: 1 },
};

var items;

const Carousel = () => {
  items = [
    <div class="owl-carousel-item position-relative">
      <img class="img-fluid" src={carouse1} alt="" />
      <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      >
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-10 col-lg-8">
              <h1 class="display-2 text-white animated slideInDown mb-4">
                Learning Today
                <p>Leading Tomorrow</p>
              </h1>
              {/* <p class="fs-5 fw-medium text-white mb-4 pb-2">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                elitr.
              </p> */}
              <a
                href=""
                class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Learn More
              </a>
              <a
                href=""
                class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
              >
                Our Classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,

    <div class="owl-carousel-item position-relative">
      <img class="img-fluid" src={carouse2} alt="" />
      <div
        class="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center"
        style={{ background: "rgba(0, 0, 0, 0.2)" }}
      >
        <div class="container">
          <div class="row justify-content-start">
            <div class="col-10 col-lg-8">
              <h1 class="display-2 text-white animated slideInDown mb-4">
                Learning Today
                <p>Leading Tomorrow</p>
              </h1>
              {/* <p class="fs-5 fw-medium text-white mb-4 pb-2">
                Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam
                no. Kasd rebum ipsum et diam justo clita et kasd rebum sea
                elitr.
              </p> */}
              <a
                href=""
                class="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3 animated slideInLeft"
              >
                Learn More
              </a>
              <a
                href=""
                class="btn btn-dark rounded-pill py-sm-3 px-sm-5 animated slideInRight"
              >
                Our Classes
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>,
  ];

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      animationType="fadeout"
      autoPlayInterval={2500}
      animationDuration={1800}
      responsive={responsive}
      controlsStrategy="alternate"
      autoPlay="true"
      autoPlayStrategy="none"
      infinite="true"
      disableButtonsControls="false"
      disableDotsControls="false"
    />
  );
};

export default Carousel;
