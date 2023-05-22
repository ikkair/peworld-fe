import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import Pin from "../../assets/images/Pin.svg"
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditProfileCompany = () => {
  const [idRecruiter, setIdRecruiter] = useState("")
  const [token, setToken] = useState("")
  const [trigger, setTrigger] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState(false)
  const [editForm, setEditForm] = useState({
    company_name: "",
    company_field: "",
    domicile: "",
    description: "",
  })
  const handleEditChangePhoto = (event) => {
    setEditForm({
      ...editForm,
      [event.target.id]: event.target.files[0]
    })
  }
  const handleEditChange = (event) => {
    setEditForm({
      ...editForm,
      [event.target.id]: event.target.value
    })
  }
  const handleEdit = (event) => {
    event.preventDefault()
    console.log(editForm)
    const formData = new FormData();
    for (const property in editForm) {
      if(!editForm[property]){
        Swal.fire({
          title: `Edit Failed`,
          text: `Please fill every text form`,
          icon: 'error',
        });
        return
      }
      formData.append(property, editForm[property])
    }
    axios.put(`${process.env.NEXT_PUBLIC_HOST}/recruiters/${idRecruiter}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data)
        Swal.fire({
          title: `Edit Success`,
          text: `${res.data.message}`,
          icon: 'success',
        });
      })
      .catch((err) => {
        console.log(err.response)
        Swal.fire({
          title: `Edit Failed`,
          text: `${err.response.data.message}`,
          icon: 'error',
        });
        setTrigger(!trigger)
      })
  }

  useEffect(() => {
    setIdRecruiter(localStorage.getItem("id"))
    setToken(localStorage.getItem("token"))
  }, [])

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}/recruiters/${idRecruiter}`)
      .then((res) => {
        const data = res.data.data[0]
        console.log(data)
        let tempEditForm = {};
        for (const property in editForm) {
          tempEditForm = {
            ...tempEditForm,
            [property]: data[property]
          }
        }
        setEditForm(tempEditForm)
        setProfilePhoto(data.photo)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [idRecruiter, trigger])

  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row align-items-start gap-lg-3">
          <div className="col-lg-3 p-3 rounded gap-2 d-flex flex-column" style={{ backgroundColor: "#fbf9f7" }}>
            {profilePhoto && profilePhoto !== "photo.jpg"? 
            <Image alt='' src={profilePhoto} className="rounded-circle align-self-center mb-3" width={130} height={130} />
            : 
            <Image alt='' src={Person1} className="rounded-circle align-self-center mb-3" width={130} />
            }

            <h1 className='h4 text-lg-start text-center'>
              <b>{editForm.company_name}</b>
            </h1>
            {editForm.company_field ?
              <span className='text-lg-start text-center'>
                {editForm.company_field}
              </span>
              : <></>}

            {editForm.domicile ?
              <div>
                <Image alt='' src={Pin} />
                <span className='text-secondary'>
                  {editForm.domicile}
                </span>
              </div>
              :
              <></>

            }

            <Button onClick={handleEdit}>
              Simpan
            </Button>
            <Button
              onClick={(event) => {
                event.preventDefault()
                setTrigger(!trigger)
              }}
            >Batal</Button>
          </div>
          <dir className="col rounded">
            <div className='row gap-3'>
              <div className='p-3 col-12 rounded' style={{ backgroundColor: "#fbf9f7" }}>
                <span className='fs-4'>
                  <b>
                    Data Perusahaan
                  </b>
                </span>
                <hr />
                <div className='mb-2'>
                  <label htmlFor="company_name" className="my-0 form-label text-secondary">Nama Perusahaan</label>
                  <input value={editForm.company_name} onChange={handleEditChange} placeholder='Masukan nama perusahaan' type="text" className="form-control" id="company_name" name='company_name' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="company_field" className="my-0 form-label text-secondary">Bidang</label>
                  <input value={editForm.company_field} onChange={handleEditChange} placeholder='Masukan bidang perusahaan ex: Studio Game' type="text" className="form-control" id="company_field" name='company_field' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="domicile" className="my-0 form-label text-secondary">Kota</label>
                  <input value={editForm.domicile} onChange={handleEditChange} placeholder='Masukan kota' type="text" className="form-control" id="domicile" name='domicile' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="description" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                  <textarea value={editForm.description} onChange={handleEditChange} placeholder='Tuliskan deskripsi singkat' type="text" className="form-control" id="description" name='description' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="photo" className="my-0 form-label text-secondary">Photo</label>
                  <input onChange={handleEditChangePhoto} placeholder='Photo' type="file" className="form-control" id="photo" name='photo' />
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

export default EditProfileCompany