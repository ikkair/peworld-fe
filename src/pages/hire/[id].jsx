import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import Pin from "../../assets/images/Pin.svg"
import Button from '@/components/Button';
import SkillBadge from '@/components/SkillBadge';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Swal from 'sweetalert2';

export async function getServerSideProps({params}){
    const res = await axios.get(`${process.env.NEXT_PUBLIC_HOST}/talents/${params.id}?skills=true`)
    return {
      props: {
        data: res.data.data[0]
      }
    }
}

const hire = ({data}) => {
  const [token, setToken] = useState("")
  const [hireForm, setHireForm] = useState({
    id_talent: data.id,
    reason: "",
    name: "",
    email: "",
    phone: "",
    description: "",
  })
  const handleHireChange = (event) => {
    setHireForm({
      ...hireForm,
      [event.target.id]: event.target.value
    })
  }
  const handleHire = (event) => {
    event.preventDefault()
    console.log(hireForm)
    for (const property in hireForm) {
      if(!hireForm[property]){
        Swal.fire({
          title: `Failed To Hire`,
          text: `Please fill every text form`,
          icon: 'error',
        });
        return
      }
    }
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/hires`, hireForm, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        Swal.fire({
          title: `Hire Success`,
          text: `${res.data.message}`,
          icon: 'success',
        });
        setHireForm({
          id_talent: data.id,
          reason: "",
          name: "",
          email: "",
          phone: "",
          description: "",
        })
      })
      .catch((err) => {
        console.log(err)
        Swal.fire({
          title: `Add Skill Failed`,
          text: `${err.response.data.message}`,
          icon: 'error',
        });
        setHireForm({
          id_talent: data.id,
          reason: "",
          name: "",
          email: "",
          phone: "",
          description: "",
        })
      })
  }
  useEffect(()=>{
    setToken(localStorage.getItem("token"))
  })
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row align-items-start gap-lg-3 gap-1">
          <dir className="col-lg-3 p-3 rounded gap-2 d-flex flex-column" style={{ backgroundColor: "#fbf9f7" }}>
            {data.photo? 
            <Image alt='' src={data.photo} className="rounded-circle align-self-center mb-3" width={130} height={130} />
             :
            <Image alt='' src={Person1} className="rounded-circle align-self-center mb-3" width={130} />
            }
            <h1 className='h4 text-lg-start text-center'>
              <b>
                {data.name}
              </b>
            </h1>
            <span className='text-lg-start text-center'>
              {data.jobdesk}
            </span>
            <div>
              <Image alt='' src={Pin} />
              <span className='text-secondary'>
                {data.domicile}
              </span>
            </div>
            <span className='text-secondary'>
              {data.jobtype}
            </span>
            <span className='text-secondary'>
              {data.description}
            </span>
            {data.skills && data.skills.length != 0 ?
              <div>
                <span>
                  <b>
                    Skills
                  </b>
                </span>
                <SkillBadge skills={data.skills} />
              </div>
              : <></>}
          </dir>
          <dir className="p-3 col rounded" style={{ backgroundColor: "#fbf9f7" }}>
            <div className='p-3 col-12 rounded' style={{ backgroundColor: "#fbf9f7" }}>
              <span className='fs-4'>
                <b>Hubungi Ikhlasul Kamal</b>
              </span>
              <hr />
              <div className='mb-2'>
                <label htmlFor="reason" className="my-0 form-label text-secondary">Tujuan Tentang Pesan Ini</label>
                <input value={hireForm.reason} onChange={handleHireChange} placeholder='Tujuan' type="text" className="form-control" id="reason" name='reason'/>
              </div>
              <div className='mb-2'>
                <label htmlFor="name" className="my-0 form-label text-secondary">Nama Lengkap</label>
                <input value={hireForm.name} onChange={handleHireChange} placeholder='Masukan nama lengkap' type="text" className="form-control" id="name" name='reason' />
              </div>
              <div className='mb-2'>
                <label htmlFor="email" className="my-0 form-label text-secondary">Email</label>
                <input value={hireForm.email} onChange={handleHireChange} placeholder='Masukan email' type="text" className="form-control" id="email" name='email' />
              </div>
              <div className='mb-2'>
                <label htmlFor="phone" className="my-0 form-label text-secondary">No Handphone</label>
                <input value={hireForm.phone} onChange={handleHireChange} placeholder='Masukan no handphone' type="text" className="form-control" id="phone" name='phone' />
              </div>
              <div className='mb-4'>
                <label htmlFor="description" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                <input value={hireForm.description} onChange={handleHireChange} placeholder='Masukan tempat kerja' type="text" className="form-control" id="description" name='description' />
              </div>
              <Button onClick={handleHire}>Hire</Button>
            </div>
          </dir>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default hire