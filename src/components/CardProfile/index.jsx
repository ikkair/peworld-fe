import React from 'react'
import style from "./cardProfile.module.css";
import Image from 'next/image'
import Pin from "../../assets/images/Pin.svg"
import Button from '../Button';
import SkillBadge from '../SkillBadge';

const CardProfile = ({ img, name, job, place, skills }) => {
  return (
    <>
      <div className="row mb-2 justify-content-between p-2 rounded-4"  style={{backgroundColor: "#fbf9f7"}}>
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          <Image className='img-thumbnail rounded-circle' src={img} width={130} alt="" />
        </div>
        <div className="col-md-8 d-flex justify-content-center align-items-md-start align-items-center flex-column gap-1">
          <span className='fs-4'>{name}</span>
          <span>{job}</span>
          <div>
            <Image src={Pin} alt=""/>
            <span> {place}</span>
          </div>
          <div>
            <SkillBadge skills={skills}/>
          </div>
        </div>
        <div className='col-md-2 pt-md-0 pt-2 d-flex align-items-center justify-content-center'>
          <Button>Profile</Button>
          </div>
      </div>
    </>
  )
}

export default CardProfile