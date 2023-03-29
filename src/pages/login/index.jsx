import Navbar from "@/components/Navbar";
import style from "./style.module.css";
const Login = () => {
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
            <div className="col-md-6 p-5 d-flex flex-column justify-content-center">
              <h1 className="h3">
                <b>Halo, Pewpeople</b>
              </h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
                euismod ipsum et dui rhoncus auctor.
              </p>
              <div className="mb-3">
                <label for="email" className={`form-label ${style.formLabel}`}>
                  Email
                </label>
                <div>
                  <input
                    type="text"
                    className={`form-control ${style.formControl}`}
                    id="email"
                    name="email"
                    placeholder="Masukkan alamat email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label
                  for="password"
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
                  />
                </div>
              </div>
              <p className="text-end">Lupa kata sandi?</p>
              <button
                className="btn btn-warning text-light mb-3"
                type="button"
              >
                Masuk
              </button>
              <p className="text-center">
                Anda belum punya akun? <span className="text-warning">Daftar Disini</span>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Login;
