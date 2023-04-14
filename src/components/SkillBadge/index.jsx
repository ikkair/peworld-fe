import React, { useState } from 'react'

const SkillBadge = ({skills}) => {
  if(skills){
  return (
    <>
      <div className='d-flex flex-wrap gap-1'>
        {skills?.map((element, index)=>{
          return (
            <span key={index} className='badge bg-warning p-2'>{element.name}</span>
          )
        })}
      </div>
    </>
  )
  } else {
    return (<></>)
  }
}

export default SkillBadge