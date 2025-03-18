import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const ProductDetails = () => {
    const { product } = useLoaderData();

  return (
    <div className='flex flex-col sm:flex-row p-10 '>
        <div className='w-100% lg:w-50% md:w-40% sm:w-40%'>
            {/*image*/}
            <div className='flex flex-col sm:flex-row'>
                <div className='w-100% sm:w-30% justify-center h-320px'>
                    {/*Stack images */}
                    <div className='flex flex-col justify-center h-full'>
                        <p>hello </p>
                    </div>
                </div>
                <div className='w-70%'>
                    {/* */}
                    <p>hello image</p>
                </div>
            </div>
        </div>
        <div className='w-60%'>
            {/*details*/}
        </div>
    </div>
  )
}

export default ProductDetails