import Image from 'next/image'
import React from 'react'

const CardPortfolio = ({application_name, photo}) => {
  return (
    <div>
      <div className='col-md-4 col-6'>
        <Image alt='' src={photo} className="img-fluid w-100" />
        <p className='text-center'>{application_name}</p>
      </div>
    </div>
  )
}

export default CardPortfolio