import Image from "next/image";
import LogoPutih from "../assets/images/Logo Putih.svg";
import Bell from "../assets/images/Bell.svg";
import style from './Navbar.module.css'
import Mail from "../assets/images/Mail.svg";
import Person1 from "../assets/images/Person1.png";
import Link from "next/link";
import { useEffect, useState } from "react";
import Button from "./Button";

const Navbar = () => {
  const [token, setToken] = useState("")
  const [role, setRole] = useState("")
  const [photo, setPhoto] = useState("")
  useEffect(() => {
    setToken(localStorage.getItem("token"))
    setPhoto(localStorage.getItem("photo"))
    setRole(localStorage.getItem("role"))
  }, [token])
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "#1d4d57" }}>
        <div className="container">
          <Link href={"/"}>
            <Image
              src={LogoPutih}
              alt=""
              className="navbar-brand img-fluid"
              width={150}
              height={150}
            />
          </Link>
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${style.navbarCollapse}`} id="navbarNav">
            {token ?
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-lg-3 mx-auto my-lg-auto my-1">
                  <Image
                    src={Mail}
                    alt="Logo"
                  />
                </li>
                <li className="nav-item mx-lg-3 mx-auto my-lg-auto my-1">
                  <Image
                    src={Bell}
                    alt="Logo"
                  />
                </li>
                <li className="nav-item mx-lg-3 mx-auto my-lg-auto d-flex my-1">
                  <Link href={role == "talent" ? `/editProfile`: `/editProfileCompany`}>
                    {photo != "photo.jpg"? 
                    <Image
                      src={photo}
                      alt="photo"
                      className={`rounded-circle navbar-brand img-fluid mx-auto my-auto`}
                      width={30}
                      height={30}
                    />
                    :
                    <Image
                      src={Person1}
                      alt="photo"
                      className={`rounded-circle navbar-brand img-fluid`}
                      width={30}
                      height={30}
                    />
                     }
                  </Link>
                </li>
              </ul>
              :
              <ul className="navbar-nav ms-auto">
                <li className="nav-item mx-lg-3 mx-auto my-lg-auto my-1">
                  <Button inverse={"true"} width={"100px"} href={"/register"}>Register</Button>
                </li>
                <li className="nav-item mx-lg-3 mx-auto my-lg-auto my-1">
                  <Button inverse={"true"} style={{color: 'red'}} width={"100px"} href={"/login"}>Login</Button>
                </li>
              </ul>}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar