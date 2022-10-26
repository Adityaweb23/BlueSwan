import React from "react";
import "../css/style.css";
import "../App.css";
import "../scss/bootstrap.scss";
import logo from "../img/logo.jpeg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div class="container-xxl bg-white p-0">
      <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
        <NavLink to={"/"} class="navbar-brand">
          <h1 class="m-0 text-primary">
            <img
              class="img-fluid"
              src={logo}
              style={{ width: "120px", height: "60px" }}
              alt=""
            />
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
              style={{}}
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
