import Link from "next/link";
import style from "./style.module.css";
const Register = () => {
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
            <div className="col-md-6 p-5 d-flex flex-column justify-content-center"  style={{backgroundColor: "#fbf9f7"}}>
              <h1 className="h3">
                <b>Halo, Pewpeople</b>
              </h1>
              <p>Mari bergabung mencari talenta yang berkualitas bersama peworld</p>
              <div className="mb-3">
                <label for="nama" className={`form-label ${style.formLabel}`}>
                  Nama
                </label>
                <div>
                  <input
                    type="text"
                    className={`form-control ${style.formControl}`}
                    id="nama"
                    name="nama"
                    placeholder="Masukkan nama panjang"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="email" className={`form-label ${style.formLabel}`}>
                  Email
                </label>
                <div>
                  <input
                    type="email"
                    className={`form-control ${style.formControl}`}
                    id="email"
                    name="email"
                    placeholder="Masukkan alamat email"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="perusahaan" className={`form-label ${style.formLabel}`}>
                  Perusahaan
                </label>
                <div>
                  <input
                    type="perusahaan"
                    className={`form-control ${style.formControl}`}
                    id="perusahaan"
                    name="perusahaan"
                    placeholder="Masukkan nama perusahaan"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="jabatan" className={`form-label ${style.formLabel}`}>
                  Jabatan
                </label>
                <div>
                  <input
                    type="jabatan"
                    className={`form-control ${style.formControl}`}
                    id="jabatan"
                    name="jabatan"
                    placeholder="Posisi di perusahaan anda"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="phone" className={`form-label ${style.formLabel}`}>
                  No Handphone
                </label>
                <div>
                  <input
                    type="phone"
                    className={`form-control ${style.formControl}`}
                    id="phone"
                    name="phone"
                    placeholder="Masukkan no handphone"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label for="password" className={`form-label ${style.formLabel}`}>
                  Kata sandi
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
              <div className="mb-3">
                <label for="passwordConfirm" className={`form-label ${style.formLabel}`}>
                  Konfirmasi kata sandi
                </label>
                <div>
                  <input
                    type="passwordConfirm"
                    className={`form-control ${style.formControl}`}
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="Masukkan kata sandi"
                  />
                </div>
              </div>
              <button className="btn btn-warning text-light mb-3" type="button">
                Masuk
              </button>
              <p className="text-center">
              Anda sudah punya akun? {" "}
                <Link href={"/login"} className="text-warning text-decoration-none">Masuk disini</Link>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
