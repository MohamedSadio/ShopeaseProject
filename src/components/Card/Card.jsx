import React from 'react'

const Card = ({imagePath,title,description,actionArrow}) => {
  return (
    <div className='flex flex-col p-6'>
        <img className='max-h-260px max-w-240px border rounded hover:scale-105 cursor-pointer transform' 
        src={imagePath} 
        alt="Glasses"/> 
        <div className='flex justify-between'>
          <div className='flex flex-col p-2'>
            <p className='text-[16px] '>{title}</p>
            {description && <p className='text-[14px] '>{description}</p>}
          </div>
          {actionArrow && <div></div>}
        </div>

    </div>
  )
}

export default Card;
