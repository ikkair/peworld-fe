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
              <SkillBadge skills={[{name: "Rust"}, {name: "Java"}, {name: "Javascript"}]}/>
            </div>
            <Button>
              Hire
            </Button>
          </dir>
          <dir className="p-3 col rounded" style={{ backgroundColor: "#fbf9f7" }}>
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
              <li className="nav-item" role="presentation">
                <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Portofolio</button>
              </li>
              <li className="nav-item" role="presentation">
                <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Pengalaman Kerja</button>
              </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
              <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                <div className='row'>
                  <div className='col-md-4 col-6'>
                    <Image src={Porto1} className="img-fluid w-100" />
                    <p className='text-center'>Remainder App</p>
                  </div>
                  <div className='col-md-4 col-6'>
                    <Image src={Porto2} className="img-fluid w-100" />
                    <p className='text-center'>Social Media App</p>
                  </div>
                  <div className='col-md-4 col-6'>
                    <Image src={Porto3} className="img-fluid w-100" />
                    <p className='text-center'>Project Management Web</p>
                  </div>
                  <div className='col-md-4 col-6'>
                    <Image src={Porto4} className="img-fluid w-100" />
                    <p className='text-center'>Remainder App</p>
                  </div>
                  <div className='col-md-4 col-6'>
                    <Image src={Porto5} className="img-fluid w-100" />
                    <p className='text-center'>Social Media App</p>
                  </div>
                  <div className='col-md-4 col-6'>
                    <Image src={Porto6} className="img-fluid w-100" />
                    <p className='text-center'>Project Management Web</p>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                <div className='row gap-3'>
                  <div className='col-12 d-flex gap-2'>
                    <div className='w-25 d-flex justify-content-center align-items-center'>
                      <Image src={Pengalaman1} />
                    </div>
                    <div className='d-flex flex-column'>
                      <span className='fs-4'>
                        <b>
                          Engineer
                        </b>
                      </span>
                      <span className='fs-5'>
                        Tokopedia
                      </span>
                      <span className='text-secondary mb-2'>
                        July 2019 - January 2020  6 Months
                      </span>
                      <span>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                      </span>
                    </div>
                  </div>
                  <div className='col-12 d-flex gap-2'>
                    <div className='w-25 d-flex justify-content-center align-items-center'>
                      <Image src={Pengalaman1} />
                    </div>
                    <div className='d-flex flex-column'>
                      <span className='fs-4'>
                        <b>
                          Engineer
                        </b>
                      </span>
                      <span className='fs-5'>
                        Tokopedia
                      </span>
                      <span className='text-secondary mb-2'>
                        July 2019 - January 2020  6 Months
                      </span>
                      <span>

                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

                      </span>
                    </div>
                  </div>
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

export default profile