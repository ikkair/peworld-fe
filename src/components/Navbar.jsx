import Image from "next/image";
import LogoPutih from "../assets/images/Logo Putih.svg";
import Bell from "../assets/images/Bell.svg";
import style from './Navbar.module.css'
import Mail from "../assets/images/Mail.svg";
import Person1 from "../assets/images/Person1.png";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{backgroundColor: "#1d4d57"}}>
        <div className="container">
          <Image
            src={LogoPutih}
            alt="Logo"
            className="navbar-brand img-fluid"
            width={150}
            height={150}
          />
          <button className="navbar-toggler bg-light" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${style.navbarCollapse}`} id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item mx-3 my-auto">
                <Image
                  src={Mail}
                  alt="Logo"
                />
              </li>
              <li className="nav-item mx-3 my-auto">
                <Image
                  src={Bell}
                  alt="Logo"
                />
              </li>
              <li className="nav-item mx-3 my-auto">
                <Image
                  src={Person1}
                  alt="Logo"
                  className={`${style.profile} navbar-brand img-fluid`}
                  width={30}
                  height={30}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar