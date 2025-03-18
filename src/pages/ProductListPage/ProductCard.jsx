import React from 'react'
import SvgFavourite from '../../components/common/SvgFavourite'
import { Link } from 'react-router-dom'

const ProductCard = ({id,title, description, price, discount, rating, brand, thumbnail}) => {
  return (
    <div className='flex flex-col hover:scale-105 transform relative w-full max-w-xs'>
      <Link to={`/product/${id}`}> 
        <img 
          className='h-48 sm:h-64 md:h-72 w-full bg-cover bg-center border rounded-xl cursor-pointer object-cover block'
          src={thumbnail}
          alt={title} />
      </Link>
      
        
      <div className='flex justify-between items-center w-full mt-2'>
        <div className='flex flex-col'>
          <p className='text-sm sm:text-base font-medium truncate pr-2'>{title}</p>
          {brand && <p className='text-xs text-gray-600 mt-1'>{brand}</p>}
        </div>
        <div>
          <p className='text-sm sm:text-base font-medium'>{price} f</p>
        </div>
      </div>
      <button 
        onClick={() => console.log("Click Button")} 
        className='absolute top-0 right-0 pt-2 sm:pt-3 pr-2 sm:pr-3 cursor-pointer'>
        <SvgFavourite />
      </button>
    </div>
  )
}

export default ProductCard