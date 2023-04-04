import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import Pin from "../../assets/images/Pin.svg"
import Mail from "../../assets/images/Mail.svg"
import Button from '@/components/Button';
import Porto1 from "../../assets/images/Porto1.png";
import Porto2 from "../../assets/images/Porto2.png";
import Porto3 from "../../assets/images/Porto3.png";
import Porto4 from "../../assets/images/Porto4.png";
import Porto5 from "../../assets/images/Porto5.png";
import Porto6 from "../../assets/images/Porto6.png";
import Pengalaman1 from "../../assets/images/Pengalaman1.png";
import SkillBadge from '@/components/SkillBadge';

const profile = () => {
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row align-items-start gap-lg-3 gap-1">
          <dir className="col-lg-3 p-3 rounded gap-2 d-flex flex-column" style={{ backgroundColor: "#fbf9f7" }}>
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
            <span className='text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <div>
              <span>
                <b>
                  Skills
                </b>
              </span>
              <SkillBadge skills={[{name: "Rust"}, {name: "Java"}, {name: "Javascript"}, {name: "C#"}]}/>
            </div>
          </dir>
          <dir className="p-3 col rounded" style={{ backgroundColor: "#fbf9f7" }}>
            <div className='p-3 col-12 rounded' style={{ backgroundColor: "#fbf9f7" }}>
              <span className='fs-4'>
                <b>Hubungi Ikhlasul Kamal</b>
              </span>
              <hr />
              <div className='mb-2'>
                <label htmlFor="project" className="my-0 form-label text-secondary">Tujuan Tentang Pesan Ini</label>
                <input placeholder='Project' type="text" className="form-control" id="project" />
              </div>
              <div className='mb-2'>
                <label htmlFor="name" className="my-0 form-label text-secondary">Nama Lengkap</label>
                <input placeholder='Masukan nama lengkap' type="text" className="form-control" id="name" />
              </div>
              <div className='mb-2'>
                <label htmlFor="email" className="my-0 form-label text-secondary">Email</label>
                <input placeholder='Masukan email' type="text" className="form-control" id="email" />
              </div>
              <div className='mb-2'>
                <label htmlFor="phone" className="my-0 form-label text-secondary">No Handphone</label>
                <input placeholder='Masukan no handphone' type="text" className="form-control" id="phone" />
              </div>
              <div className='mb-4'>
                <label htmlFor="deskripsi" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                <input placeholder='Masukan tempat kerja' type="text" className="form-control" id="deskripsi" />
              </div>
              <Button>Hire</Button>
            </div>
          </dir>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default profile