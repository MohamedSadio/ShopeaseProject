import React from 'react'
import HeroImg from '../../assets/images/HeroImg.jpg'

const HeroSection = () => {
  return (
    <div className='relative flex items-center bg-cover bg-center text-left h-280px md:h-320px lg:h-screen w-full'
    style={{backgroundImage:`url(${HeroImg})`}}>
        {/* Optional overlay for better text readability on mobile */}
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-black bg-opacity-30 md:bg-opacity-0'></div>
        
        {/* Main content container */}
        <main className='px-15px md:px-40px lg:px-24 z-10 w-full'>
          <div className='text-left'>
            <h2 className='text-2xl text-white'>Watches</h2>
          </div>
          
          {/* Responsive text sizes */}
          <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-4xl md:text-5xl lg:text-6xl font-bold'>
            Winter Pack
          </p>
          
          <p className='mt-3 text-white sm:mt-5 sm:max-w-xl text-xl md:text-2xl lg:text-3xl'>
            Strengthen your style
          </p>
          
          {/* Responsive button */}
          <button className='border rounded mt-6 border-black hover:bg-white hover:text-black hover:border-black text-white bg-black w-40 md:w-44 h-10 md:h-12 text-14px md:text-16px'>
            Shop now
          </button>
        </main>
    </div>
  )
}

export default HeroSection