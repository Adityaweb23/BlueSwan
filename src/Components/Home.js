import React from "react";
import Carousel from "./Carousel";
import "../css/style.css";
import "../scss/bootstrap.scss";
import carouse1 from "../img/carousel-1.jpg";
import carouse2 from "../img/carousel-2.jpg";
import about1 from "../img/about-1.jpg";
import about2 from "../img/about-2.jpg";
import about3 from "../img/about-3.jpg";
import user1 from "../img/user.jpg";
import calltoaction from "../img/call-to-action.jpg";
import classes1 from "../img/classes-1.jpg";
import classes2 from "../img/classes-2.jpg";
import classes3 from "../img/classes-3.jpg";
import classes4 from "../img/classes-4.jpg";
import classes5 from "../img/classes-5.jpg";
import classes6 from "../img/classes-6.jpg";
import appointment from "../img/appointment.jpeg";
import team1 from "../img/team-1.jpg";
import team2 from "../img/team-2.jpg";
import team3 from "../img/team-3.jpg";
import { BsCheck2Circle, BsCheckCircleFill } from "react-icons/bs";

const Home = () => {
  return (
    <div class="container-xxl bg-white p-0">
      {/* carousel start */}
      {/* <div class="container-fluid p-0 mb-5">
        <div class="owl-carousel header-carousel position-relative">
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
                      The Best Kindergarten School For Your Child
                    </h1>
                    <p class="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea elitr.
                    </p>
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
          </div>
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
                      Make A Brighter Future For Your Child
                    </h1>
                    <p class="fs-5 fw-medium text-white mb-4 pb-2">
                      Vero elitr justo clita lorem. Ipsum dolor at sed stet sit
                      diam no. Kasd rebum ipsum et diam justo clita et kasd
                      rebum sea elitr.
                    </p>
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
          </div>
        </div>
      </div> */}
      {/* carousel end */}
      {/* New carousel start */}
      <div class="container-fluid p-0 mb-5">
        <div class="header-carousel position-relative">
          <Carousel />
        </div>
      </div>
      {/* New Carouse end */}
      {/* facilities start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">School Facilities</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="facility-item">
                <div class="facility-icon bg-primary">
                  <span class="bg-primary"></span>
                  <i class="fa fa-bus-alt fa-3x text-primary"></i>
                  <span class="bg-primary"></span>
                </div>
                <div class="facility-text bg-primary">
                  <h3 class="text-primary mb-3">School Bus</h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="facility-item">
                <div class="facility-icon bg-success">
                  <span class="bg-success"></span>
                  <i class="fa fa-futbol fa-3x text-success"></i>
                  <span class="bg-success"></span>
                </div>
                <div class="facility-text bg-success">
                  <h3 class="text-success mb-3">Playground</h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="facility-item">
                <div class="facility-icon bg-warning">
                  <span class="bg-warning"></span>
                  <i class="fa fa-home fa-3x text-warning"></i>
                  <span class="bg-warning"></span>
                </div>
                <div class="facility-text bg-warning">
                  <h3 class="text-warning mb-3">Healthy Canteen</h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
            <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
              <div class="facility-item">
                <div class="facility-icon bg-info">
                  <span class="bg-info"></span>
                  <i class="fa fa-chalkboard-teacher fa-3x text-info"></i>
                  <span class="bg-info"></span>
                </div>
                <div class="facility-text bg-info">
                  <h3 class="text-info mb-3">Positive Learning</h3>
                  <p class="mb-0">
                    Eirmod sed ipsum dolor sit rebum magna erat lorem kasd vero
                    ipsum sit
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* facilities end */}
      {/* about start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h1 class="title mb-4">About Us</h1>
              <h4 className="mb-4" style={{ fontSize: 29 }}>
                "Blue Swan Public School" addressing the educational needs of
                early childhood years by following developmentally appropriate
                practices.
              </h4>

              <p className=" mb-0">
                We at "Blue Swan Public School" celebrate childhood, through the
                unique blend of international approaches amalgamated with Indian
                culture.
                <br />
                <br />
                <BsCheckCircleFill /> &nbsp; Blue Swan Public School brings a
                perfect balance across the country with a tint of regional touch
                so that a child connects its surroundings and local environment
                instantly which makes it the best school for your child.
                <br />
                <br />
                <BsCheckCircleFill /> &nbsp;The child gets amused and happy to
                express out what he/she has learned in school.
                <br />
                <br />
                <BsCheckCircleFill /> &nbsp; That is why we say, India
                celebrates childhood at Blue Swan Public School.
                <br />
                <br />
                We at Blue Swan Public School believe in celebrating childhood
                with the same intensity and love as you do for your child. The
                2nd home of your child, where he/she learns the external world
                through our own teaching methodology. Blue Swan Public School
                brings a perfect balance across the country with a tint of
                regional touch so that a child connects its surroundings and
                local environment instantly which makes it the best school for
                your child.
              </p>
              <br />
              {/* <br /> */}
              <div class="row g-4 align-items-center">
                <div class="col-sm-6">
                  <a class="btn btn-primary rounded-pill py-3 px-5" href="">
                    Read More
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
              <div class="row">
                <div class="col-12 text-center">
                  <img
                    class="img-fluid w-75 rounded-circle bg-light p-3"
                    src={about1}
                    alt=""
                  />
                </div>
                <div class="col-6 text-start" style={{ marginTop: "-150px" }}>
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src={about2}
                    alt=""
                  />
                </div>
                <div class="col-6 text-end" style={{ marginTop: "-150px" }}>
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src={about3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}

      {/* <!-- Call To Action Start --> */}
      {/* <div class="container-xxl py-5">
        <div class="container">
          <div class="bg-light rounded">
            <div class="row g-0">
              <div
                class="col-lg-6 wow fadeIn"
                data-wow-delay="0.1s"
                style={{ minHeight: "400px" }}
              >
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded"
                    src={calltoaction}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 class="mb-4">Become A Teacher</h1>
                  <p class="mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et
                    sit, sed stet lorem sit clita duo justo magna dolore erat
                    amet
                  </p>
                  <a class="btn btn-primary py-3 px-5" href="">
                    Get Started Now<i class="fa fa-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Call To Action End --> */}

      {/* <!-- Classes Start --> */}

      {/* <!-- Classes End --> */}

      {/* Appointment start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="bg-light rounded">
            <div class="row g-0">
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <h1 class="mb-4">Make Appointment</h1>
                  <form>
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="gname"
                            placeholder="Gurdian Name"
                          />
                          <label for="gname">Gurdian Name</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control border-0"
                            id="gmail"
                            placeholder="Gurdian Email"
                          />
                          <label for="gmail">Gurdian Email</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="cname"
                            placeholder="Child Name"
                          />
                          <label for="cname">Child Name</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="cage"
                            placeholder="Child Age"
                          />
                          <label for="cage">Child Age</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <textarea
                            class="form-control border-0"
                            placeholder="Leave a message here"
                            id="message"
                            style={{ height: "100px" }}
                          ></textarea>
                          <label for="message">Message</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <button
                          class="btn btn-primary w-100 py-3"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="col-lg-6 wow fadeIn"
                data-wow-delay="0.5s"
                style={{ minHeight: "400px" }}
              >
                <div class="position-relative h-100">
                  <img
                    class="position-absolute w-100 h-100 rounded"
                    src={appointment}
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Appointment End --> */}

      {/* <!-- Team Start --> */}
      {/* <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Popular Teachers</h1>
            <p>
              Eirmod sed ipsum dolor sit rebum labore magna erat. Tempor ut
              dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed
              rebum vero dolor duo.
            </p>
          </div>
          <div class="row g-4">
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="team-item position-relative">
                <img class="img-fluid rounded-circle w-75" src={team1} alt="" />
                <div class="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div class="d-flex align-items-center">
                    <a class="btn btn-square btn-primary mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div class="team-item position-relative">
                <img class="img-fluid rounded-circle w-75" src={team2} alt="" />
                <div class="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div class="d-flex align-items-center">
                    <a class="btn btn-square btn-primary mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div class="team-item position-relative">
                <img class="img-fluid rounded-circle w-75" src={team3} alt="" />
                <div class="team-text">
                  <h3>Full Name</h3>
                  <p>Designation</p>
                  <div class="d-flex align-items-center">
                    <a class="btn btn-square btn-primary mx-1" href="">
                      <i class="fab fa-facebook-f"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-twitter"></i>
                    </a>
                    <a class="btn btn-square btn-primary  mx-1" href="">
                      <i class="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* <!-- Team End --> */}
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Home;
