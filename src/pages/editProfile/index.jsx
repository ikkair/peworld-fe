import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Image from 'next/image'
import Person1 from "../../assets/images/Person1.png";
import Pin from "../../assets/images/Pin.svg"
import Button from '@/components/Button';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import SkillBadge from '@/components/SkillBadge';

const EditProfile = () => {
  // States
  const [id, setId] = useState("")
  const [token, setToken] = useState("")
  const [skills, setSkills] = useState([])
  const [trigger, setTrigger] = useState(false)
  const [profilePhoto, setProfilePhoto] = useState("photo.jpg")
  const [skillForm, setSkillForm] = useState({
    skill: ""
  })
  const [editForm, setEditForm] = useState({
    name: "",
    jobdesk: "",
    domicile: "",
    jobtype: "",
    description: "",
  })
  const [expForm, setExpForm] = useState({
    jobdesk: "",
    company_name: "",
    date_start: "",
    date_end: "",
    description: "",
  })
  const [portoForm, setPortoForm] = useState({
    name: "",
    link: "",
    type: "",
  })

  // Edit Profile
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
    axios.put(`${process.env.NEXT_PUBLIC_HOST}/talents/${id}`, formData, {
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

  // Experience
  const handleExpPhotoChange = (event) => {
    setExpForm({
      ...expForm,
      [event.target.id]: event.target.files[0]
    })
  }
  const handleExpChange = (event) => {
    setExpForm({
      ...expForm,
      [event.target.name]: event.target.value
    })
  }
  const handleExp = (event) => {
    event.preventDefault()
    console.log(expForm)
    const formData = new FormData();
    for (const property in expForm) {
      if(!expForm[property] && property != "date_end"){
        Swal.fire({
          title: `Failed To Add Experience`,
          text: `Please fill every text form`,
          icon: 'error',
        });
        return
      }
      formData.append(property, expForm[property])
    }
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/experiences`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data)
        Swal.fire({
          title: `Experience Added`,
          text: `${res.data.message}`,
          icon: 'success',
        });
      })
      .catch((err) => {
        console.log(err.response)
        Swal.fire({
          title: `Failed To Add Experience`,
          text: `${err.response.data.message}`,
          icon: 'error',
        });
      })
  }

  // Portfolio
  const handlePortoPhotoChange = (event) => {
    setPortoForm({
      ...portoForm,
      [event.target.id]: event.target.files[0]
    })
  }
  const handlePortoChange = (event) => {
    setPortoForm({
      ...portoForm,
      [event.target.name]: event.target.value
    })
  }
  const handlePorto = (event) => {
    event.preventDefault()
    console.log(portoForm)
    const formData = new FormData();
    for (const property in portoForm) {
      if(!portoForm[property]){
        Swal.fire({
          title: `Failed To Add Portfolio`,
          text: `Please fill every text form`,
          icon: 'error',
        });
        return
      }
      formData.append(property, portoForm[property])
    }
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/portfolios`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        console.log(res.data)
        Swal.fire({
          title: `Portfolio Added`,
          text: `${res.data.message}`,
          icon: 'success',
        });
      })
      .catch((err) => {
        console.log(err.response)
        Swal.fire({
          title: `Failed To Add Portfolio`,
          text: `${err.response.data.message}`,
          icon: 'error',
        });
      })
  }

  // Skill
  const handleSkillChange = (event) => {
    setSkillForm({
      ...skillForm,
      [event.target.id]: event.target.value
    })
  }
  const handleSkill = (event) => {
    event.preventDefault()
    console.log(skillForm)
    axios.post(`${process.env.NEXT_PUBLIC_HOST}/talentSkills`, skillForm, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => {
        Swal.fire({
          title: `Skill Added`,
          text: `${res.data.message}`,
          icon: 'success',
        });
        setTrigger(!trigger)
        setSkillForm({ skill: "" })
      })
      .catch((err) => {
        Swal.fire({
          title: `Add Skill Failed`,
          text: `${err.response.data.message}`,
          icon: 'error',
        });
        setSkillForm({ skill: "" })
      })
  }

  // Use Effect
  useEffect(() => {
    setId(localStorage.getItem("id"))
    setToken(localStorage.getItem("token"))
  }, [])
  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_HOST}/talents/${id}?skills=true`)
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
        setSkills(data.skills)
        setProfilePhoto(data.photo)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [id, trigger])
  return (
    <>
      <Navbar />
      <div className="container mt-3">
        <div className="row align-items-start gap-lg-3">
          <div className="col-lg-3 p-3 rounded gap-2 d-flex flex-column" style={{ backgroundColor: "#fbf9f7" }}>
            {profilePhoto != "photo.jpg" ?
              <Image alt='' src={profilePhoto} className="rounded-circle align-self-center mb-3" width={130} height={130} />
              :
              <Image alt='' src={Person1} className="rounded-circle align-self-center mb-3" width={130} />
            }
            <h1 className='h4 text-lg-start text-center'>
              <b>
                {editForm.name}
              </b>
            </h1>
            <span className='text-lg-start text-center'>
              {editForm.jobdesk}
            </span>
            <div>
              <Image alt='' src={Pin} />
              <span className='text-secondary'>
                {editForm.domicile}
              </span>
            </div>
            <span className='text-secondary'>
              {editForm.jobtype}
            </span>
            {skills && skills.length != 0 ?
              <div>
                <span>
                  <b>
                    Skills
                  </b>
                </span>
                <SkillBadge skills={skills} />
              </div>
              : <></>}
            <Button onClick={handleEdit}>
              Simpan
            </Button>
            <Button onClick={(event) => {
              setTrigger(!trigger)
              event.preventDefault()
            }}>Batal</Button>
          </div>
          <div className="col rounded">
            <div className='row gap-3'>
              <div className='p-3 col-12 rounded' style={{ backgroundColor: "#fbf9f7" }}>
                <span className='fs-4'>
                  <b>
                    Data Diri
                  </b>
                </span>
                <hr />
                <div className='mb-2'>
                  <label htmlFor="name" className="my-0 form-label text-secondary">Nama Lengkap</label>
                  <input value={editForm.name} onChange={handleEditChange} placeholder='Masukan nama lengkap' type="text" className="form-control" id="name" />
                </div>
                <div className='mb-2'>
                  <label htmlFor="jobdesk" className="my-0 form-label text-secondary">Job Desk</label>
                  <input value={editForm.jobdesk} onChange={handleEditChange} placeholder='Masukan job desk' type="text" className="form-control" id="jobdesk" name='jobdesk' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="jobtype" className="my-0 form-label text-secondary">Job Type</label>
                  <input value={editForm.jobtype} onChange={handleEditChange} placeholder='Masukan job type' type="text" className="form-control" id="jobtype" name='jobtype' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="domicile" className="my-0 form-label text-secondary">Domisili</label>
                  <input value={editForm.domicile} onChange={handleEditChange} placeholder='Masukan domisili' type="text" className="form-control" id="domicile" name='domicile' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="description" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                  <textarea value={editForm.description} onChange={handleEditChange} placeholder='Masukan tempat kerja' type="text" className="form-control" id="description" name='description' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="photo" className="my-0 form-label text-secondary">Photo</label>
                  <input onChange={handleEditChangePhoto} placeholder='Photo' type="file" className="form-control" id="photo" name='photo' />
                </div>
              </div>
              <div className='col-12 rounded p-3' style={{ backgroundColor: "#fbf9f7" }}>
                <span className='fs-4'>
                  <b>
                    Skill
                  </b>
                </span>
                <hr />
                <div className='d-flex gap-2'>
                  <input value={skillForm.skill} onChange={handleSkillChange} placeholder='ex: Rust' type="text" className="form-control" id="skill" />
                  <Button onClick={handleSkill} width="200px">
                    Simpan
                  </Button>
                </div>
              </div>
              <div className='col-12 rounded p-3' style={{ backgroundColor: "#fbf9f7" }}>
                <span className='fs-4'>
                  <b>
                    Pengalaman Kerja
                  </b>
                </span>
                <hr />
                <div className='mb-2'>
                  <label htmlFor="jobdesk" className="my-0 form-label text-secondary">Posisi</label>
                  <input onChange={handleExpChange} value={expForm.jobdesk} placeholder='Web developer' type="text" className="form-control" id="jobdesk" name='jobdesk' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="company_name" className="my-0 form-label text-secondary">Nama Perusahaan</label>
                  <input onChange={handleExpChange} value={expForm.company_name} placeholder='PT Ikkair Bisa' type="text" className="form-control" id="company_name" name='company_name' />
                </div>
                <div className='mb-2 row'>
                  <div className='col-6'>
                    <label htmlFor="date_start" className="my-0 form-label text-secondary">Bulan/Tahun Mulai</label>
                    <input onChange={handleExpChange} value={expForm.date_start} placeholder='YYYY/MM/DD' type="date" className="form-control" id="date_start" name='date_start' />
                  </div>
                  <div className='col-6'>
                    <label htmlFor="date_end" className="my-0 form-label text-secondary">Bulan/Tahun Selesai</label>
                    <input onChange={handleExpChange} value={expForm.date_end} placeholder='YYYY/MM/DD' type="date" className="form-control" id="date_end" name='date_end' />
                  </div>
                </div>
                <div className='mb-2'>
                  <label htmlFor="description" className="my-0 form-label text-secondary">Deskripsi Singkat</label>
                  <textarea onChange={handleExpChange} value={expForm.description} placeholder='Deskripsikan pekerjaan anda' type="text" className="form-control" id="description" name='description' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="photo" className="my-0 form-label text-secondary">Photo</label>
                  <input onChange={handleExpPhotoChange} placeholder='Photo' type="file" className="form-control" id="photo" name='photo' />
                </div>
                <hr />
                <Button onClick={handleExp}>Tambah Pengalaman Kerja</Button>
              </div>
              <div className='col-12 rounded p-3' style={{ backgroundColor: "#fbf9f7" }}>
                <span className='fs-4'>
                  <b>Portofolio</b>
                </span>
                <hr />
                <div className='mb-2'>
                  <label htmlFor="name" className="my-0 form-label text-secondary">Nama Aplikasi</label>
                  <input onChange={handlePortoChange} value={portoForm.name} placeholder='Kairshop' type="text" className="form-control" id="name" name='name' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="link" className="my-0 form-label text-secondary">Link Aplikasi</label>
                  <input onChange={handlePortoChange} value={portoForm.link} placeholder='www.link.com' type="text" className="form-control" id="link" name='link' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="type" className="my-0 form-label text-secondary">Tipe Aplikasi</label>
                  <input onChange={handlePortoChange} value={portoForm.type} placeholder='Web application' type="text" className="form-control" id="type" name='type' />
                </div>
                <div className='mb-2'>
                  <label htmlFor="photo" className="my-0 form-label text-secondary">Photo</label>
                  <input onChange={handlePortoPhotoChange} placeholder='Photo' type="file" className="form-control" id="photo" name='photo' />
                </div>
                <hr />
                <Button onClick={handlePorto}>Tambah Portofolio</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default EditProfile