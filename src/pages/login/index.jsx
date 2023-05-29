import style from "./style.module.css";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useRouter } from "next/router";
import Link from "next/link";
const Login = () => {
  const router = useRouter()
  const [formLoginTalent, setFormLoginTalent] = useState({
    email: "",
    password: ""
  })
  const [formLoginRecruiter, setFormLoginRecruiter] = useState({
    email: "",
    password: ""
  })
  const handleChangeTalent = (event) => {
    setFormLoginTalent({
      ...formLoginTalent,
      [event.target.name]: event.target.value
    })
  }
  const handleChangeRecruiter = (event) => {
    setFormLoginRecruiter({
      ...formLoginRecruiter,
      [event.target.name]: event.target.value
    })
  }
  const handleLoginRecruiter = (event) => {
    event.preventDefault()
    console.log(formLoginRecruiter)
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/recruiters/login`, formLoginRecruiter)
      .then((res) => {
        console.log(res.data.data[0])
        Swal.fire({
          title: `Login Success`,
          text: `${res.data.message}`,
          icon: 'success',
        });
        const data = res.data.data[0]
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        localStorage.setItem('role', data.role);
        localStorage.setItem('photo', data.photo);
        router.push("/")
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          Swal.fire({
            title: `Login Failed`,
            text: `${err.response.data.message}`,
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: `Login Failed`,
            text: `Unknown issue, please contact admin`,
            icon: 'error',
          });
        }
        setFormLoginRecruiter({
          email: "",
          password: ""
        })
        console.log(err)
      })
  }
  const handleLoginTalent = (event) => {
    event.preventDefault()
    console.log(formLoginTalent)
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/talents/login`, formLoginTalent)
      .then((res) => {
        console.log(res.data.data[0])
        Swal.fire({
          title: `Login Success`,
          text: `${res.data.message}`,
          icon: 'success',
        });
        const data = res.data.data[0]
        localStorage.setItem('token', data.token);
        localStorage.setItem('id', data.id);
        localStorage.setItem('role', data.role);
        localStorage.setItem('photo', data.photo);
        router.push("/")
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          Swal.fire({
            title: `Login Failed`,
            text: `${err.response.data.message}`,
            icon: 'error',
          });
        } else {
          Swal.fire({
            title: `Login Failed`,
            text: `Unknown issue, please contact admin`,
            icon: 'error',
          });
        }
        setFormLoginTalent({
          email: "",
          password: ""
        })
      })
  }
  return (
    <>
      <main>
        <div className="container-fluid">
          <div className="row vh-100">
            <div className="col-md-6 g-0">
              <div className={`${style.authImage} h-100`}>
                <h2>
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h2>
              </div>
            </div>
            <div className="col-md-6 p-5 d-flex flex-column justify-content-center" style={{ backgroundColor: "#fbf9f7" }}>
              <h1 className="h3">
                <b>Halo, Pewpeople</b>
              </h1>
              <p>Silahkan login</p>
              <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                  <button
                    className="nav-link active text-warning"
                    id="nav-home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-home"
                    type="button"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                  >
                    Talent
                  </button>
                  <button
                    className="nav-link text-warning"
                    id="nav-profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#nav-profile"
                    type="button"
                    role="tab"
                    aria-controls="nav-profile"
                    aria-selected="false"
                  >
                    Recruiter
                  </button>
                </div>
              </nav>
              <div className="tab-content mt-3" id="nav-tabContent">
                <div
                  className="tab-pane fade show active mb-3"
                  id="nav-home"
                  role="tabpanel"
                  aria-labelledby="nav-home-tab"
                  tabIndex={0}
                >
                  <form onSubmit={handleLoginTalent}>
                    <div className="mb-3">
                      <label htmlFor="email" className={`form-label ${style.formLabel}`}>
                        Email
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-control ${style.formControl}`}
                          id="email"
                          name="email"
                          placeholder="Masukkan alamat email"
                          value={formLoginTalent.email}
                          onChange={handleChangeTalent}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className={`form-label ${style.formLabel}`}
                      >
                        Password
                      </label>
                      <div>
                        <input
                          type="password"
                          className={`form-control ${style.formControl}`}
                          id="password"
                          name="password"
                          placeholder="Masukkan kata sandi"
                          value={formLoginTalent.password}
                          onChange={handleChangeTalent}
                        />
                      </div>
                    </div>
                    <p className="text-end">Lupa kata sandi?</p>
                    <button
                      className="btn btn-warning text-light mb-3 w-100"
                      type="submit"
                    >
                      Masuk
                    </button>
                    <p className="text-center">
                      Anda belum punya akun? <Link href={"/register"} className="text-warning text-decoration-none">Daftar Disini</Link>
                    </p>
                  </form>
                </div>
                <div
                  className="tab-pane fade"
                  id="nav-profile"
                  role="tabpanel"
                  aria-labelledby="nav-profile-tab"
                  tabIndex={0}
                >
                  <form onSubmit={handleLoginRecruiter}>
                    <div className="mb-3">
                      <label htmlFor="email" className={`form-label ${style.formLabel}`}>
                        Email
                      </label>
                      <div>
                        <input
                          type="text"
                          className={`form-control ${style.formControl}`}
                          id="email"
                          name="email"
                          placeholder="Masukkan alamat email"
                          value={formLoginRecruiter.email}
                          onChange={handleChangeRecruiter}
                        />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label
                        htmlFor="password"
                        className={`form-label ${style.formLabel}`}
                      >
                        Password
                      </label>
                      <div>
                        <input
                          type="password"
                          className={`form-control ${style.formControl}`}
                          id="password"
                          name="password"
                          placeholder="Masukkan kata sandi"
                          value={formLoginRecruiter.password}
                          onChange={handleChangeRecruiter}
                        />
                      </div>
                    </div>
                    <p className="text-end">Lupa kata sandi?</p>
                    <button
                      className="btn btn-warning text-light mb-3 w-100"
                      type="submit"
                    >
                      Masuk
                    </button>
                    <p className="text-center">
                      Anda belum punya akun? <Link href={"/register"} className="text-warning text-decoration-none">Daftar Disini</Link>
                    </p>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
