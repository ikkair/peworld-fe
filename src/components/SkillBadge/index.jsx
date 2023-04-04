import React, { useState } from 'react'

const SkillBadge = ({skills}) => {
  return (
    <>
      <div className='d-flex flex-wrap gap-1'>
        {skills?.map((element)=>{
          return (
            <span key={element} className='badge bg-warning p-2'>{element.name}</span>
          )
        })}
      </div>
    </>
  )
}

export default SkillBadge