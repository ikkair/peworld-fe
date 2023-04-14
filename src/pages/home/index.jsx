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
  const [inputValue, setInputValue] = useState("");
  const [pagination, setPagination] = useState([]);
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("name");

  const handlePage = (event) => {
    console.log(event.target)
    setPage(event.target.id)
  }
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  const handleClick = () => {
    setSearch(inputValue)
  }

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}/talents?search=${search}&sortby=${sortBy}&page=${page}`)
      .then((res) => {
        setCandidates(res.data.data)
        let tempPage = []
        for(let i = 1; i <= res.data.pagination.totalPage ; i++ ){
          tempPage.push(
            <li key={`${i}`} className="page-item"><button onClick={handlePage} name={`${i}`}  id={`${i}`} className="page-link" href="#">{i}</button></li>
          )
        }
        setPagination(tempPage)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [search, sortBy, page])

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
          <input onChange={handleChange} value={inputValue} className={home.inputGrup} type="text" placeholder="Search talent" />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle h-100" type="button" data-bs-toggle="dropdown" aria-expanded="false">Sort By</button>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" onClick={() => { setSortBy(`name`) }}>Name</a></li> <li><a class="dropdown-item" onClick={() => { setSortBy("domicile") }}>Domisili</a></li> <li><a class="dropdown-item" onClick={() => { setSortBy("jobdesk") }}>Jobdesk</a></li>
            </ul>
          </div>
          <div>
            <Button onClick={handleClick} width="120px" height="100%">Search</Button>
          </div>
        </div>
        {candidates.map((element, index) => {
          const href = `/profile/${element.id}`
          return (
            <CardProfile key={index} href={href} skills={element.skills} img={element.photo} place={`${element.domicile}`} name={`${element.name}`} job={`${element.jobdesk}`} />
          )
        })}
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {pagination}
              {/* <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li> */}
            </ul>
          </nav>
      </div>
      <Footer />
    </>
  );
}

export default Home;