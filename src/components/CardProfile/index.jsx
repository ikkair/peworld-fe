import React from 'react'
import style from "./cardProfile.module.css";
import Image from 'next/image'
import Pin from "../../assets/images/Pin.svg"
import Person1 from "../../assets/images/Person1.png";
import Button from '../Button';
import SkillBadge from '../SkillBadge';

const CardProfile = ({ img, name, job, place, skills, href }) => {
  // if(job && place){
  //   return (<></>)
  // }
  return (
    <>
      <div className="row justify-content-between my-2 p-2 rounded-4"  style={{backgroundColor: "#fbf9f7"}}>
        <div className="col-md-2 d-flex justify-content-center align-items-center">
          {img != "photo.jpg" ?
          <Image className='img-thumbnail rounded-circle' src={img} width={130} height={130} alt="" />
            :
          <Image className='img-thumbnail rounded-circle' src={Person1} width={130} height={130} alt="" />
            }
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
          <Button href={href}>Profile</Button>
          </div>
      </div>
    </>
  )
}

export default CardProfile