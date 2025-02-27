import React from 'react'
import HeroSection from './components/HeroSection/HeroSection'
import NewArrivals from './components/Navigation/Sections/NewArrivals'
import Category from './components/Navigation/Sections/Categories/Category'
import content from './data/content.json'
import Footer from './components/Navigation/Footer/Footer'
//import Navigation from './components/Navigation/Navigation' 

const Shop = () => {
  return (
    <>     
      <HeroSection />
      <NewArrivals />
      {content?.categories && content?.categories?.map((item, index) => <Category key={item?.title+index} {...item}/>)}
      <Footer content={content?.footer} />
    </>
  )
}

export default Shop