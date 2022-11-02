import React from "react";
import "../css/style.css";
import "../scss/bootstrap.scss";
import classes1 from "../img/classes-1.jpeg";
import classes2 from "../img/classes-2.jpeg";
import classes3 from "../img/classes-3.jpeg";
import classes4 from "../img/classes-4.jpeg";
import classes5 from "../img/classes-5.jpeg";
import classes6 from "../img/classes-6.jpeg";

const Footer = () => {
  return (
    <div>
      <div
        className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Get In Touch</h3>
              <p className="mb-2">
                <i className="fa fa-map-marker-alt me-3"></i>At- Hutupara, Darlipali
                Sundargarh Odisha - 770072
              </p>
              <p className="mb-2">
                <i className="fa fa-phone-alt me-3"></i>+91 9673454330
              </p>
              <p className="mb-2">
                <i className="fa fa-envelope me-3"></i>info@blueswanpublicschool.in
              </p>
              <div className="d-flex pt-2">
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-youtube"></i>
                </a>
                <a className="btn btn-outline-light btn-social" href="">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <h3 class="text-white mb-4">Quick Links</h3>
              <a class="btn btn-link text-white-50" href="/">
                ► Home
              </a>
              <a class="btn btn-link text-white-50" href="/about">
                ► About Us
              </a>
              <a class="btn btn-link text-white-50" href="/curriculum">
                ► Curriculum
              </a>
              <a class="btn btn-link text-white-50" href="/career">
                ► Career
              </a>
              <a class="btn btn-link text-white-50" href="/contact">
                ► Contact Us
              </a>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white mb-4">Photo Gallery</h3>
              <div className="row g-2 pt-2">
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={classes1}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={classes2}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={classes3}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={classes4}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={classes5}
                    alt=""
                  />
                </div>
                <div className="col-4">
                  <img
                    className="img-fluid rounded bg-light p-1"
                    src={classes6}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* <div className="col-lg-3 col-md-6">
              <h3 className="text-white mb-4">Newsletter</h3>
              <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
              <div
                className="position-relative mx-auto"
                style={{ maxWidth: "400px" }}
              >
                <input
                  className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
                  type="text"
                  placeholder="Your email"
                />
                <button
                  type="button"
                  className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2"
                >
                  SignUp
                </button>
              </div>
            </div> */}
          </div>
        </div>
        <div className="container">
          <div className="copyright">
            <div className="row">
              <div className="col-md-12 text-center  mb-3 mb-md-0">
                &copy;{" "}
                <a className="" href={"/"}>
                  Blue Swan Public School
                </a>
                .All Right Reserved.
                {/* This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support.  */}
                Designed and Maintained By{" "}
                <a
                  className=""
                  href="https://uphilltech.com"
                  style={{ textDecoration: "none" }}
                >
                  Uphill Technologies
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
