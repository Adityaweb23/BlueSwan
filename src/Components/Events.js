import React, { useEffect, useState } from "react";
import frame1 from "../img/students1.png";
import frame2 from "../img/students2.png";
import "../css/style.css";
import "../scss/bootstrap.scss";
import "../App.css";
import cd1 from "../img/Blueswan Images/cd1.jpg";
import cd2 from "../img/Blueswan Images/cd2.jpg";
import cd3 from "../img/Blueswan Images/cd3.jpg";
import cd4 from "../img/Blueswan Images/cd4.jpg";
import sp1 from "../img/Blueswan Images/sp1.jpg";
import sp2 from "../img/Blueswan Images/sp2.jpg";
import sp3 from "../img/Blueswan Images/sp3.jpg";
import sp4 from "../img/Blueswan Images/sp4.jpg";
import g1 from "../img/Blueswan Images/g1.jpg";
import g2 from "../img/Blueswan Images/g2.jpg";
import g3 from "../img/Blueswan Images/g3.jpg";
import g4 from "../img/Blueswan Images/g4.jpg";
import g5 from "../img/Blueswan Images/g5.jpg";
import g6 from "../img/Blueswan Images/g6.jpg";
import g7 from "../img/Blueswan Images/g7.jpg";
import g8 from "../img/Blueswan Images/g8.jpg";
import g9 from "../img/Blueswan Images/g9.jpg";
import g10 from "../img/Blueswan Images/g10.jpg";
import g11 from "../img/Blueswan Images/g11.jpg";
import g12 from "../img/Blueswan Images/g12.jpg";
import gd1 from "../img/Blueswan Images/gd1.jpg";
import gd2 from "../img/Blueswan Images/gd2.jpg";
import gd3 from "../img/Blueswan Images/gd3.jpg";
import gd4 from "../img/Blueswan Images/gd4.jpg";
import gd5 from "../img/Blueswan Images/gd5.jpg";
import gd6 from "../img/Blueswan Images/gd6.jpg";
import gd7 from "../img/Blueswan Images/gd7.jpg";
import gd8 from "../img/Blueswan Images/gd8.jpg";
import gd9 from "../img/Blueswan Images/gd9.jpg";
import gd10 from "../img/Blueswan Images/gd10.jpg";
import gd11 from "../img/Blueswan Images/gd11.jpg";
import gd12 from "../img/Blueswan Images/gd12.jpg";
import gd13 from "../img/Blueswan Images/gd13.jpg";
import gd14 from "../img/Blueswan Images/gd14.jpg";
import id1 from "../img/Blueswan Images/id1.jpg";
import id2 from "../img/Blueswan Images/id2.jpg";
import id3 from "../img/Blueswan Images/id3.jpg";
import id4 from "../img/Blueswan Images/id4.jpg";
import rd1 from "../img/Blueswan Images/rd1.jpg";
import rd2 from "../img/Blueswan Images/rd2.jpg";
import rd3 from "../img/Blueswan Images/rd3.jpg";
import rd4 from "../img/Blueswan Images/rd4.jpg";
import rd5 from "../img/Blueswan Images/rd5.jpg";
import rd6 from "../img/Blueswan Images/rd6.jpg";
import rd7 from "../img/Blueswan Images/rd7.jpg";
import rd8 from "../img/Blueswan Images/rd8.jpg";
import rd9 from "../img/Blueswan Images/rd9.jpg";
import rd10 from "../img/Blueswan Images/rd10.jpg";
import rd11 from "../img/Blueswan Images/rd11.jpg";
import rd12 from "../img/Blueswan Images/rd12.jpg";
import rd13 from "../img/Blueswan Images/rd13.jpg";
import rd14 from "../img/Blueswan Images/rd14.jpg";
import {
    BsCheck2Circle,
    BsCheckCircleFill,
    BsCheckCircle,
} from "react-icons/bs";
const Events = () => {


    const person = [{ imgname: `${cd1}`, parent: "childrenday" }, { imgname: `${cd2}`, parent: "childrenday" }, { imgname: `${cd3}`, parent: "childrenday" }, { imgname: `${cd4}`, parent: "childrenday" }];
    // console.log(person);
    const [flag, setFlag] = useState(0);
    return (
        <>
            {/* <div className="container curriculum mt-3 row align-items-center"> */}
            {/*page header start  */}
            <div className="container-xxl py-5 page-header position-relative mb-5">
                <div className="container py-5 row">
                    <div className="col-md-6">
                        <h1 className="display-2 text-white animated slideInDown mb-4">
                            Events
                        </h1>
                        <p className="text-white">
                            These days there are tons of photos around. Many are very good. Many just beautiful. Lot of professional stuff done by pros that know how to get the thing done.
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
            <div className="row">
            <div className="col-md-2 col-6 ">

            <button className="btn btn-primary w-100 py-3 my-1" onClick={()=>{setFlag(1)}}>Childrens Day</button>
            </div>
            <br/>
            <div className="col-md-2 col-6">

            <button className="btn btn-primary w-100 py-3 my-1" onClick={()=>{setFlag(2)}}>Saraswati Pujan</button>
            </div>
            <br/>
            <div className="col-md-2 col-6">

            <button className="btn btn-primary w-100 py-3 my-1" onClick={()=>{setFlag(3)}}>Independence Day</button>
            </div>
            <br/>
            <div className="col-md-2 col-6">

            <button className="btn btn-primary w-100 py-3 my-1" onClick={()=>{setFlag(4)}}> Green Day</button>
            </div>
            <br/>
            <div className="col-md-2 col-6">

            <button className="btn btn-primary w-100 py-3 my-1" onClick={()=>{setFlag(5)}}>Ganesh Chaturthi</button>
            </div>
            <br/>
            <div className="col-md-2 col-6">

            <button className="btn btn-primary w-100 py-3 my-1" onClick={()=>{setFlag(6)}}>Republic Day</button>
            </div>
            <br/>
            </div> 
            </div>
            {/*page header end  */}
            <section id="events" className="events">
                <div className="container" data-aos="fade-up">
                    <div className="row">
                        {/* //childrenday */}
                        {(() => {
                        if(flag==0 || flag==1){
                            return(
                                <>

                            <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={cd1} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            childrens Day
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={cd2} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            childrens Day
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={cd3} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            childrens Day
                                        </h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                                <div className="card">
                                    <div className="card-img">
                                        <img src={cd4} alt="..." className="img-fluid" />
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            childrens Day
                                        </h5>
                                    </div>
                                </div>
                            </div>
                                </>

                        )}
                    })()}
                        {/* //childrenday */}
                        {(() => {
                        if(flag==0 || flag==2){
                            return(
                                <>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={sp1} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Saraswati Pujan
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={sp2} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Saraswati Pujan
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={sp3} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Saraswati Pujan
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={sp4} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Saraswati Pujan
                                    </h5>
                                </div>
                            </div>
                        </div>
                        </>

                        )}
                    })()}
                        {/* saraswati pujan */}
                        {(() => {
                        if(flag==0 || flag==3){
                            return(
                                <>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={id1} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Independence Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={id2} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Independence Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={id3} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Independence Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={id4} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Independence Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        </>

)}
})()}
                        {/* Independence */}
                        {(() => {
                        if(flag==0 || flag==4){
                            return(
                                <>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd1} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd2} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd3} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd4} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd5} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd6} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd7} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd8} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd9} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd10} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd11} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd12} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd13} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={gd14} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Green Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        </>

)}
})()}
                        {/* Green Day */}
                        {(() => {
                        if(flag==0 || flag==5){
                            return(
                                <>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g1} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g2} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g3} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g4} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g5} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g6} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g7} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g8} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g9} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g10} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g11} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={g12} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Ganesh Chaturthi
                                    </h5>
                                </div>
                            </div>
                        </div>
                        </>

)}
})()}
                        {/* ganesh chaturthi */}
                        {(() => {
                        if(flag==0 || flag==6){
                            return(
                                <>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd1} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd2} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd3} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd4} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd5} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd6} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd7} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd8} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd9} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd10} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd11} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd12} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd13} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 p-md-5 col-12 d-flex align-items-stretch">
                            <div className="card">
                                <div className="card-img">
                                    <img src={rd14} alt="..." className="img-fluid" />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title">
                                        Republic Day
                                    </h5>
                                </div>
                            </div>
                        </div>
                        </>

)}
})()}
                        {/* republic day */}



                    </div>
                </div>
            </section>
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </>
    
    
    );
    useEffect(() => {
        flag=0;
      },[flag]);
};

export default Events;
