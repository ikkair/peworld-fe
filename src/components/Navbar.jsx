import Image from "next/image";
import LogoUngu from "../assets/images/Logo Ungu.svg";
import Bell from "../assets/images/Bell.svg";
import style from './Navbar.module.css'
import Mail from "../assets/images/Mail.svg";
import Person1 from "../assets/images/Person1.png";

const Navbar = () => {
  return (
    <>
    <nav className="navbar bg-light navbar-expand-lg sticky-top"> 
        <div className="container">
            <Image
                src={LogoUngu}
                alt="Logo"
                className="navbar-brand img-fluid"
                width={150}
                height={150}
            />
            <div className="d-flex align-items-center gap-4">
            <Image
                src={Mail}
                alt="Logo"
            />
            <Image
                src={Bell}
                alt="Logo"
            />
            <Image
                src={Person1}
                alt="Logo"
                className={`${style.profile} navbar-brand img-fluid`}
                width={30}
                height={30}
            />
            </div>
        </div>
    </nav>
    </>
  )
}

export default Navbar