import React from "react";

const Contact = () => {
  return (
    <div class="container-xxl bg-white p-0">
      {/* <!-- Spinner Start --> */}
      {/* <div
        id="spinner"
        class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div class="spinner-border text-primary" style={{width: "3rem", height: "3rem" ,role="status"}}>
                <span class="sr-only">Loading...</span>
            </div>
      </div> */}
      {/* <!-- Spinner End --> */}

      {/* <!-- Page Header End --> */}
      <div class="container-xxl py-5 page-header position-relative mb-5">
        <div class="container py-5">
          <h1 class="display-2 text-white animated slideInDown mb-4">
            Contact Us
          </h1>
         
        </div>
      </div>
      {/* <!-- Page Header End --> */}

      {/* <!-- Contact Start --> */}
      <div class="container-xxl py-5">
        <div class="container">
          <div
            class="text-center mx-auto mb-5 wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: "600px" }}
          >
            <h1 class="mb-3">Get In Touch</h1>
            <p>
              It is a pleasure and sorrows, that they should not be elected in
              some cases we may be able to do. It was from this, or something
              similar because it is pleasure, look for the debts. No one of
              these will open the very laborious, all the consequences of
              things, of current events.
            </p>
          </div>
          <div class="row g-4 mb-5">
            <div
              class="col-md-6 col-lg-4 text-center wow fadeInUp"
              data-wow-delay="0.1s"
            >
              <div
                class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "75px", height: "75px" }}
              >
                <i class="fa fa-map-marker-alt fa-2x text-primary"></i>
              </div>
              <h6>At- Hutupara, Darlipali, Sundargarh, Odisha - 770072</h6>
            </div>
            <div
              class="col-md-6 col-lg-4 text-center wow fadeInUp"
              data-wow-delay="0.3s"
            >
              <div
                class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "75px", height: "75px" }}
              >
                <i class="fa fa-envelope-open fa-2x text-primary"></i>
              </div>
              <h6>info@blueswanpublicschool.in</h6>
            </div>
            <div
              class="col-md-6 col-lg-4 text-center wow fadeInUp"
              data-wow-delay="0.5s"
            >
              <div
                class="bg-light rounded-circle d-inline-flex align-items-center justify-content-center mb-4"
                style={{ width: "75px", height: "75px" }}
              >
                <i class="fa fa-phone-alt fa-2x text-primary"></i>
              </div>
              <h6>+91 9673454330</h6>
            </div>
          </div>
          <div class="bg-light rounded">
            <div class="row g-0">
              <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                <div class="h-100 d-flex flex-column justify-content-center p-5">
                  <p class="mb-4">
                    The contact form is currently inactive. Get a functional and
                    working contact form with Ajax & PHP in a few minutes. Just
                    copy and paste the files, add a little code and you're done.{" "}
                    <a href="https://htmlcodex.com/contact-form">
                      Download Now
                    </a>
                    .
                  </p>
                  <form>
                    <div class="row g-3">
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="name"
                            placeholder="Your Name"
                          />
                          <label for="name">Your Name</label>
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-floating">
                          <input
                            type="email"
                            class="form-control border-0"
                            id="email"
                            placeholder="Your Email"
                          />
                          <label for="email">Your Email</label>
                        </div>
                      </div>
                      <div class="col-12">
                        <div class="form-floating">
                          <input
                            type="text"
                            class="form-control border-0"
                            id="subject"
                            placeholder="Subject"
                          />
                          <label for="subject">Subject</label>
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
                          Send Message
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
                  <iframe
                    class="position-relative rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3700.0265529256017!2d83.90558321459419!3d21.971943960286776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a20c34de11d5807%3A0x70871d8635e418d6!2sBlue%20Swan%20Play%20School!5e0!3m2!1sen!2sin!4v1612246478806!5m2!1sen!2sin"
                    frameborder="0"
                    style={{ minHeight: "400px", border: "0" }}
                    allowfullscreen=""
                    aria-hidden="false"
                    tabindex="0"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}

      {/* <!-- Back to Top --> */}
      <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top">
        <i class="bi bi-arrow-up"></i>
      </a>
    </div>
  );
};

export default Contact;
