import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import Pin from "../../assets/images/Pin.svg"
import Button from '@/components/Button';

const editProfile = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row align-items-start gap-lg-3">
          <dir className="col-lg-3 p-3 rounded gap-2 d-flex flex-column" style={{backgroundColor: "#fbf9f7"}}>
            <Image src={Person1} className="rounded-circle align-self-center mb-3" width={130} />
            <h1 className='h4 text-lg-start text-center'>
              <b>
                PT Ikkair Bisa
              </b>
            </h1>
            <span className='text-lg-start text-center'>
              Game Studio
            </span>
            <div>
              <Image src={Pin} />
              <span className='text-secondary'>
                Bojonggede, Bogor
              </span>
            </div>
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
                  <label htmlFor="name" className="my-0 form-label text-secondary">Nama Perusahaan</label>
                  <input placeholder='Masukan nama perusahaan' type="text" className="form-control" id="name" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="bidang" className="my-0 form-label text-secondary">Bidang</label>
                  <input placeholder='Masukan bidang perusahaan ex: Studio Game' type="text" className="form-control" id="bidang" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="kota" className="my-0 form-label text-secondary">Kota</label>
                  <input placeholder='Masukan kota' type="text" className="form-control" id="kota" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="description" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                  <textarea placeholder='Tuliskan deskripsi singkat' type="text" className="form-control" id="description" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="email" className="my-0 form-label text-secondary">Email</label>
                  <input placeholder='Masukan email' type="text" className="form-control" id="email" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="telepon" className="my-0 form-label text-secondary">Nomor Telepon</label>
                  <input placeholder='Masukan nomor telepon' type="text" className="form-control" id="telepon" />
                </div>
              </div>
            </div>
          </dir>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default editProfile