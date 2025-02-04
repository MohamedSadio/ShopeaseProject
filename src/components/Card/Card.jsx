import React from 'react'

const Card = ({imagePath,tiltle}) => {
  return (
    <div className='flex flex-col p-8'>
        <img className='max-h-260px max-w-240px border rounded hover:scale-105 cursor-pointer transform' 
        src={imagePath} 
        alt="Glasses"/> 
        <p className='text-[16px] p-[5px] mt-2'>{tiltle}</p>
    </div>
  )
}

export default Card;