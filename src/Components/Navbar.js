import React from "react";
import "../css/style.css";
import "../App.css";
import "../scss/bootstrap.scss";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container-xxl bg-white p-0">
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <NavLink to={"/"} class="navbar-brand">
          <h1 class="m-0 text-primary">
            <i class="fa fa-book-reader me-3"></i>Kider
          </h1>
        </NavLink>
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
            <NavLink to={"/about"} class="nav-item nav-link">
              About Us
            </NavLink>
            <NavLink to={"/curriculum"} class="nav-item nav-link">
              Curriculum
            </NavLink>
            <NavLink to={"/career"} class="nav-item nav-link">
              Career
            </NavLink>
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
            <NavLink to={"/contact"} class="nav-item nav-link">
              Contact Us
            </NavLink>
          </div>
          <NavLink
            to={"/contact"}
            class="btn btn-primary rounded-pill px-3 d-none d-lg-block"
          >
            Join Us<i class="fa fa-arrow-right ms-3"></i>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
