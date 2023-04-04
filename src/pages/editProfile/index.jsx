import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import Pin from "../../assets/images/Pin.svg"
import Button from '@/components/Button';

const editProfileCompany = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row align-items-start gap-lg-3">
          <dir className="col-lg-3 p-3 rounded gap-2 d-flex flex-column" style={{backgroundColor: "#fbf9f7"}}>
            <Image src={Person1} className="rounded-circle align-self-center mb-3" width={130} />
            <h1 className='h4 text-lg-start text-center'>
              <b>
                Ikhlasul Kamal
              </b>
            </h1>
            <span className='text-lg-start text-center'>
              Web Developer
            </span>
            <div>
              <Image src={Pin} />
              <span className='text-secondary'>
                Bojonggede, Bogor
              </span>
            </div>
            <span className='text-secondary'>
              Freelancer
            </span>
            <Button>
              Simpan
            </Button>
            <Button>Batal</Button>
          </dir>
          <dir className="col rounded">
            <div className='row gap-3'>
              <div className='p-3 col-12 rounded' style={{backgroundColor: "#fbf9f7"}}>
                <span className='fs-4'>
                  <b>
                    Data Diri
                  </b>
                </span>
                <hr />
                <div className='mb-2'>
                  <label htmlFor="name" className="my-0 form-label text-secondary">Nama Lengkap</label>
                  <input placeholder='Masukan nama lengkap' type="text" className="form-control" id="name" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="jobdesk" className="my-0 form-label text-secondary">Job Desk</label>
                  <input placeholder='Masukan job desk' type="text" className="form-control" id="jobdesk" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="domisili" className="my-0 form-label text-secondary">Domisili</label>
                  <input placeholder='Masukan domisili' type="text" className="form-control" id="domisili" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="tempatkerja" className="my-0 form-label text-secondary">Tempat Kerja</label>
                  <input placeholder='Masukan tempat kerja' type="text" className="form-control" id="tempatkerja" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="deskripsi" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                  <input placeholder='Masukan tempat kerja' type="text" className="form-control" id="deskripsi" />
                </div>
              </div>
              <div className='col-12 rounded p-3' style={{backgroundColor: "#fbf9f7"}}>
                <span className='fs-4'>
                  <b>
                    Skill
                  </b>
                </span>
                <hr />
                <div className='d-flex gap-2'>
                  <input placeholder='Rust' type="text" className="form-control" id="deskripsi" />
                  <Button width="200px">
                    Simpan
                  </Button>
                </div>
              </div>
              <div className='col-12 rounded p-3' style={{backgroundColor: "#fbf9f7"}}>
                <span className='fs-4'>
                  <b>
                    Pengalaman Kerja
                  </b>
                </span>
                <hr />
                <div className='mb-2'>
                  <label htmlFor="posisi" className="my-0 form-label text-secondary">Posisi</label>
                  <input placeholder='Web developer' type="text" className="form-control" id="posisi" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="namaPerusahaan" className="my-0 form-label text-secondary">Nama Perusahaan</label>
                  <input placeholder='PT Ikkair Bisa' type="text" className="form-control" id="namaPerusahaan" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="date" className="my-0 form-label text-secondary">Bulan/Tahun</label>
                  <input placeholder='Januari 2023' type="text" className="form-control" id="date" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="deskription" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                  <textarea placeholder='Deskripsikan pekerjaan anda' type="text" className="form-control" id="description" />
                </div>
                <hr />
                <Button>Tambah Pengalaman Kerja</Button>
              </div>
            </div>
          </dir>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default editProfileCompany