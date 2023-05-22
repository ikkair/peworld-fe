import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import Image from 'next/image'
import React from 'react'
import Person1 from "@/assets/images/Person1.png";
import Pin from "@/assets/images/Pin.svg"
import Button from '@/components/Button';

const profileCompany = () => {
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col py-5 d-flex flex-column align-items-center m-3 rounded' style={{ backgroundColor: "#fbf9f7" }}>
            <Image src={Person1} alt='' className='mb-2 rounded-circle' width={150} />
            <span className='fs-4'>
              <b>
                PT Ikkair Bisa
              </b>
            </span>
            <span>
              Game Studio
            </span>
            <div className='mb-2 d-flex align-items-center gap-1'>
              <Image src={Pin} alt='' />
              <span className='text-secondary'>
                Bojonggede, Bogor
              </span>
            </div>
            <span className='mb-3 text-center inline-block w-75 text-secondary'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </span>
            <Button className="mb-3" width="200px">
              Edit Profile
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default profileCompany