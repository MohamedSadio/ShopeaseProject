import React from 'react'
import Glasses from '../../assets/images/Glasses.jpg'

const Card = () => {
  return (
    <div className='flex flex-col p-8'>
        <img className='max-h-[260px] max-w-[240px] border rounded' 
        src={Glasses} 
        alt="Glasses"/> 
    </div>
  )
}

export default Card;