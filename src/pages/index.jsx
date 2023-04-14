import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/Button'
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import axios from 'axios';

// images
import Landing1 from '../../public/landing-page/landing-page-1.png';
import Landing2 from '../../public/landing-page/landing-page-2.png';
import Landing3 from '../../public/landing-page/landing-page-3.png';

export async function getStaticProps() {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/skills`)
  return {
    props: {
      skills: res.data.data
    }
  }
}

export default function Home({skills}) {
  return (
    <>
      <Navbar />
      <div className='container p-5' style={{backgroundColor: "#fbf9f7"}}>
        <div className="row gy-5 mt-1">
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-evenly">
            <h1 className='mt-5'>Talenta terbaik negeri untuk perubahan revolusi 4.0</h1>
            <h6>Lorem ipsum dolor sit amet, ex eos commune dissentiet. Ea duo quod putent voluptatibus, et consul putant salutandi cum. Meis vocibus appareat quo ex. An qui alii posse postea, quo eu scriptorem eloquentiam.</h6>
            <Button href={`/home`}>Mulai Dari Sekarang</Button>
          </div>
          <div className="col-sm-12 col-md-6">
            <Image src={Landing1} className="img-fluid" alt='' />
          </div>
          <div className="col-sm-12 col-md-6">
            <Image src={Landing2} className="img-fluid" alt='' />
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h2>Kenapa harus mencari talent di peworld?</h2>
            <ul>
              <li>Talenta terbaik dengan kualifikasi bagus</li>
              <li>Proses merekrut kandidat dengan mudah</li>
              <li>Mencari kandidat berdasarkan skill dan domisili</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 d-flex flex-column justify-content-center">
            <h2>Skill Talent</h2>
            <ul>
              {
                skills.map((element) => {
                  return (
                    <li key={element.name}>
                      {element.name}
                    </li>
                  )
                })
              }
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <Image src={Landing3} className="img-fluid" alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
