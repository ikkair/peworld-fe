import React, { useEffect, useState } from "react";
import home from "./home.module.css";
import Person1 from "@/assets/images/Person1.png";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CardProfile from "@/components/CardProfile";
import axios from "axios";
import Button from "@/components/Button";

function Home() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}/candidates?_embed=candidate_skills`)
      .then((res) => {
        setCandidates(res.data)
        console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  return (
    <>
      <Navbar />
      <div
        className={`${home.topBar} p-1 d-flex align-items-center`} style={{ backgroundColor: "#8e9d96" }}
      >
        <div className="container w-100">
          <div className="col">
            <h5 className="mt-1">Top Jobs</h5>
          </div>
        </div>
      </div>
      <div className="pb-3 container">
        <div className={`my-2 d-flex justify-content-center gap-2 p-2`}>
          <input className={home.inputGrup} type="text" placeholder="Search talent" />
          <div>
            <Button width="120px" height="100%">Search</Button>
          </div>
        </div>
        {candidates.map((element)=>{
          return(
          <CardProfile skills={element.candidate_skills} key={element.id} img={Person1} place={`${element.domicile}`} name={`${element.name}`} job={`${element.position}`}/>
          )
        })}
      </div>
      <Footer />
    </>
  );
}

export default Home;