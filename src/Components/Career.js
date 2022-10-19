import React from "react";
import appointment from "../img/appointment.jpg";
import "../App.css";
import { NavLink } from "react-router-dom";

const Career = () => {
  return (
    // <div class="container-xxl py-5">
    <>
      {/*page header start  */}
      <div class="container-xxl py-5 page-header position-relative mb-5">
        <div class="container py-5 row">
          <div class="col-md-6">
            <h1 class="display-2 text-white animated slideInDown mb-4">
              Career
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
      <div class="container">
        <div class="bg-light rounded">
          <div class="row g-0">
            <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
              <div class="h-100 d-flex flex-column justify-content-center p-md-5">
                <div class=" col-lg-12">
                  <div className="career_cont2 p-2 rounded">
                    <div class="course-info d-flex justify-content-between align-items-center ">
                      <h5>Mobile No.</h5>
                      <p>
                        <a href="#">+91 9673454330</a>
                      </p>
                    </div>

                    <div class="course-info d-flex justify-content-between align-items-center ">
                      <h5>Weeks</h5>
                      <p>6 Days a Week</p>
                    </div>

                    <div class="course-info d-flex justify-content-between align-items-center ">
                      <h5>School Timing</h5>
                      <p>10:00 AM - 1:30 PM</p>
                    </div>
                  </div>
                </div>
                <br />
                <br />
                <br />
                <div class="col-lg-12">
                  <h2 class="title">Vacancy details</h2>
                  <br />
                  <p>
                    Required experience and energetic female English teacher for
                    Pre-Primary school. Teacher should be fluent in english.
                    Send your resume to this mail id
                    blueswanplayschool@gmail.com. We will intimate for
                    interview.
                  </p>
                  <br />
                  <NavLink to={"contact"}>For More Details.</NavLink>
                </div>
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
      {/* </div> */}
    </>
  );
};

export default Career;
