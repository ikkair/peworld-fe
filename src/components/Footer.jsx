import React from "react";
import Image from "next/image";
import LogoPutih from "../assets/images/Logo Putih.svg";

const Footer = () => {
  return (
    <>
      <div style={{ backgroundColor: "#1d4d57" }}>
        <div className="container">
          <div className="row">
            <div className="py-4">
              <div className="navbar-brand d-flex align-items-center btn fs-5 pb-2">
                <Image
                  src={LogoPutih}
                  alt="Logo"
                  className="img-fluid"
                  width={150}
                  height={150}
                />
              </div>
              <span className="text-light pb-3 d-inline-block w-75">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </span>
              <hr className="text-light" />
              <div className="d-flex justify-content-between">
                <span className="text-light">
                  2020 Peworld. All right reserved
                </span>
                <div>
                  <span className="me-4 text-light">Telpon</span>
                  <span className="text-light">Email</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
