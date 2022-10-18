import React from "react";
import "../css/style.css";
import "../App.css";
import "../scss/bootstrap.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container-xxl bg-white p-0">
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <a href="" class="navbar-brand">
          <h1 class="m-0 text-primary">
            <i class="fa fa-book-reader me-3"></i>Kider
          </h1>
        </a>
        <button
          type="button"
          class="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <div class="navbar-nav mx-auto">
            <NavLink
              // href=""
              to={"/"}
              class="nav-item nav-link active"

              // style={navcss}
            >
              Home
            </NavLink>
            <a href="#" class="nav-item nav-link">
              About Us
            </a>
            <a href="#" class="nav-item nav-link">
              Classes
            </a>
            <div class="nav-item dropdown">
              <a
                href="#"
                class="nav-link dropdown-toggle"
                data-bs-toggle="dropdown"
              >
                Pages
              </a>
              <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                <a href="#" class="dropdown-item">
                  School Facilities
                </a>
                <a href="#" class="dropdown-item">
                  Popular Teachers
                </a>
                <a href="#" class="dropdown-item">
                  Become A Teachers
                </a>
                <a href="#" class="dropdown-item">
                  Make Appointment
                </a>
                <a href="#" class="dropdown-item">
                  Testimonial
                </a>
                <a href="#" class="dropdown-item">
                  404 Error
                </a>
              </div>
            </div>
            <a href="#" class="nav-item nav-link">
              Contact Us
            </a>
          </div>
          <a
            href=""
            class="btn btn-primary rounded-pill px-3 d-none d-lg-block"
          >
            Join Us<i class="fa fa-arrow-right ms-3"></i>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
