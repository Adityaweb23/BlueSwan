import React from "react";
import frame1 from "../img/students1.png";
import frame2 from "../img/students2.png";
import "../css/style.css";
import "../scss/bootstrap.scss";
import "../App.css";
import {
    BsCheck2Circle,
    BsCheckCircleFill,
    BsCheckCircle,
} from "react-icons/bs";
const Singleevents = () => {
    return (
        <>
            {/* <div className="container curriculum mt-3 row align-items-center"> */}
            {/*page header start  */}
            <div className="container-xxl py-5 page-header position-relative mb-5">
                <div className="container py-5 row">
                    <div className="col-md-6">
                        <h1 className="display-2 text-white animated slideInDown mb-4">
                           events
                        </h1>
                        <p className="text-white">
                            These days there are tons of photos around. Many are very good. Many just beautiful. Lot of professional stuff done by pros that know how to get the thing done.
                        </p>
                    </div>
                </div>
            </div>
            {/*page header end  */}
            <section id="events" className="events">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {/* {movie.map((curMovie) => { */}
                            <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={frame1} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <a href="">Philosophy of Our Curriculum</a>
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        {/* })} */}
            </div>
                </div>
            </section>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </>
    );
};

export default Singleevents;
