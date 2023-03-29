import React from "react";
import home from "./home.module.css";
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import Pin from "../../assets/images/Pin.svg"
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <div
        className={`${home.topBar} bg-primary p-1 d-flex align-items-center`}
      >
        <div className="container w-100">
          <div className="col">
            <h5 className="mt-1">Top Jobs</h5>
          </div>
        </div>
      </div>
      <div className="py-3 container">
<div className="row mb-2">
          <div className="col-sm-2 col-3 col-lg-1 d-flex align-items-center">
            <Image className='img-thumbnail' src={Person1} style={{ borderRadius: "100%" }} alt="" />
          </div>
          <div className={`col-lg-9 col-9 col-sm-10`}>
            <h4>John Cena</h4>
            <span>WWE Developer</span>
            <p><Image src={Pin} /> Lorem Ipsum</p>
            <div className={`d-flex ${home.listSkills}`}>
              <p className={`btn text-nowrap me-2 `}>Wrestling</p>
            </div>
          </div>
          <div className="offset-3 offset-sm-2 offset-lg-0 col-5 col-md-2 d-grid justify-content-md-center justify-content-start align-items-center mt-lg-0 mt-2">
            <a className={`btn text-wrap  btn-block ${home.seeProfil}`}> Profil</a> </div>
        </div>
        <div className="row mb-2">
          <div className="col-sm-2 col-3 col-lg-1 d-flex align-items-center">
            <Image className='img-thumbnail' src={Person1} style={{ borderRadius: "100%" }} alt="" />
          </div>
          <div className={`col-lg-9 col-9 col-sm-10`}>
            <h4>Bob Cena</h4>
            <span>AWS Developer</span>
            <p><Image src={Pin} /> Lorem Ipsum</p>
            <div className={`d-flex ${home.listSkills}`}>
              <p className={`btn text-nowrap me-2 `}>Coding</p>
              <p className={`btn text-nowrap me-2 `}>Java</p>
            </div>
          </div>
          <div className="offset-3 offset-sm-2 offset-lg-0 col-5 col-md-2 d-grid justify-content-md-center justify-content-start align-items-center mt-lg-0 mt-2">
            <a className={`btn text-wrap  btn-block ${home.seeProfil}`}> Profil</a> </div>
        </div>
        <div className="row">
          <div className="col-sm-2 col-3 col-lg-1 d-flex align-items-center">
            <Image className='img-thumbnail' src={Person1} style={{ borderRadius: "100%" }} alt="" />
          </div>
          <div className={`col-lg-9 col-9 col-sm-10`}>
            <h4>Mom Cena</h4>
            <span>The Developer</span>
            <p><Image src={Pin} /> Lorem Ipsum</p>
            <div className={`d-flex ${home.listSkills}`}>
              <p className={`btn text-nowrap me-2 `}>Cooking</p>
              <p className={`btn text-nowrap me-2 `}>Cleaning</p>
              <p className={`btn text-nowrap me-2 `}>Healing</p>
            </div>
          </div>
          <div className="offset-3 offset-sm-2 offset-lg-0 col-5 col-md-2 d-grid justify-content-md-center justify-content-start align-items-center mt-lg-0 mt-2">
            <a className={`btn text-wrap  btn-block ${home.seeProfil}`}> Profil</a> </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;