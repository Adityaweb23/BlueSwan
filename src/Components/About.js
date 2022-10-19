import React from "react";
import "../css/style.css";
import "../scss/bootstrap.scss";
import img1 from "../img/about-1.jpg";
import img2 from "../img/about-2.jpg";
import img3 from "../img/about-3.jpg";
import userimg from "../img/user.jpg";
import calltoaction from "../img/call-to-action.jpg";
import team1 from "../img/team-1.jpg";
import team2 from "../img/team-2.jpg";
import team3 from "../img/team-3.jpg";
import classes1 from "../img/classes-1.jpg";
import classes2 from "../img/classes-2.jpg";
import classes3 from "../img/classes-3.jpg";
import classes4 from "../img/classes-4.jpg";
import classes5 from "../img/classes-5.jpg";
import classes6 from "../img/classes-6.jpg";
import {
  BsCheck2Circle,
  BsCheckCircleFill,
  BsCheckCircle,
} from "react-icons/bs";

const Home = () => {
  return (
    <div>
      {/*page header start  */}
      <div class="container-xxl py-5 page-header position-relative mb-5">
        <div class="container py-5 row">
          <div class="col-md-6">
            <h1 class="display-2 text-white animated slideInDown mb-4">
              About Us
            </h1>
            <p class="text-white">
              It is a pleasure and sorrows, that they should not be elected in
              some cases we may be able to do. It was from this, or something
              similar because it is pleasure, look for the debts. No one of
              these will open the very laborious, all the consequences of
              things, of current events.
            </p>
          </div>
        </div>
      </div>
      {/*page header end  */}

      {/* about start */}
      <div class="container-xxl py-5">
        <div class="container">
          <div class="row g-5 align-items-center">
            <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <div class="section_title">
                <h1 class="title mb-4">Vision</h1>

                <p class=" mb-0">
                  To be a leader in school Education and Daycare, provide
                  children “a home-away-from-home“ to give them “best-in-class”
                  environment to optimize their Potential.
                </p>
                <br />
                <h1 class="title mb-4">Our Mission</h1>
                <p>
                  "To help young minds grow in a child-friendly environment for
                  the holistic development of a child." We focus on the
                  satisfaction of the child's inquisitive mind through concept
                  clarity. By infusing love and care into every aspect of
                  learning, we, at Blue Swan, convert every day into wonderful
                  learning experiences that lead to the all-round development of
                  the child. Moreover, here the child gets immense happiness,
                  complete freedom and the required guidance to grow and blossom
                  in the happy world of BlueSwan!
                </p>
              </div>
            </div>
            <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
              <div class="row">
                <div class="col-12 text-center">
                  <img
                    class="img-fluid w-75 rounded-circle bg-light p-3"
                    src={img1}
                    alt=""
                  />
                </div>
                <div class="col-6 text-start" style={{ marginTop: "-150px" }}>
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src={img2}
                    alt=""
                  />
                </div>
                <div class="col-6 text-end" style={{ marginTop: "-150px" }}>
                  <img
                    class="img-fluid w-100 rounded-circle bg-light p-3"
                    src={img3}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
      {/* call to action start */}
      <div class="container-xxl py-5">
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
                <div class="h-100 d-flex flex-column justify-content-center p-2">
                  <h1 class="title mb-4">Awards and Achievements</h1>
                  <p class=" mb-0 p-2">
                    By far, the most common end of the year award is for
                    attendance. Students can be rewarded for each quarter,
                    semester, or for the entire Blue Ribbon from Dreamstime
                    school year. This is a popular reward mainly because
                    everyone is in with a chance of winning. Students do not
                    need to have excelled in any kind of academic achievement;
                    they just need to have attended school. Academic
                    achievements are important to recognize. After all, students
                    attend school primarily to learn new skills. Recognizing the
                    achievements that they have made in each area with
                    curricular awards is a great way to foster confidence and
                    promote good study habits. The following are examples of
                    popular end of year awards that are often used by elementary
                    school teachers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container-xxl py-5">
        <div class="container">
          <div class="bg-light rounded">
            <div class="row g-0">
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                <div class="h-100 d-flex flex-column justify-content-center p-2">
                  <h1 class="title mb-4">Why BlueSwan Public School</h1>
                  <div class="section_title ml-lg-5">
                    <br />
                    <br />

                    <ul>
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; Why BlueSwan Public School
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; Spacious Ambitious
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; Good ventilation &amp; Fresh air
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; Positive learning environment for your child
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; Full security
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; Completely in residential area
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; The homely and warm atmosphere, which the
                        children <br />
                        truly enjoy.
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle />
                        &nbsp; Kids are allowed to freely move around. All
                        <br /> the measures are taken so that the child’s safety
                        is ensured.
                      </li>
                      <br />
                      <li style={{ listStyleType: "none" }}>
                        <BsCheckCircle /> &nbsp; Utmost, care is taken to design
                        the premises
                        <br /> in such a way that the child feels its second
                        home.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}

      {/* team start */}

      {/* team end */}

      {/* footer start */}

      {/* footer end */}

      {/* back to top */}

      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Home;
