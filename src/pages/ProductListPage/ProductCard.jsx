import React from 'react'
import SvgFavourite from '../../components/common/SvgFavourite'

const ProductCard = ({title,description,price,discount,rating,brand,thumbnail}) => {
  return (
    <div className='flex flex-col hover:scale-105 transform relative'>
      <img className={`h-320px w-280px bg-cover bg-center border rounded-xl cursor-pointer 
      object-cover block`}
        src={thumbnail}
        alt="" />
        
      <div className='flex justify-between items-center'>
        <div className='flex flex-col pt-2'>
          <p className='text-16px p-1 '>{title}</p>
          {description && <p className='text-12px p-1 text-gray-600'>{brand}</p>}
        </div>
        <div>
          <p>{price} f</p>
        </div>
      </div>
      <button onClick={()=> console.log("Click Button")} className='absolute top-0 right-0 pt-4 pr-4'><SvgFavourite /></button>
    </div>
  )
}

export default ProductCard