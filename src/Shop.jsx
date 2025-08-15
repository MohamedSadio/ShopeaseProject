import React, { useEffect,useRef  } from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import NewArrivals from './components/Navigation/Sections/NewArrivals';
import Category from './components/Navigation/Sections/Categories/Category';
import content from './data/content.json';
import Footer from './components/Navigation/Footer/Footer';
import { fetchCategories } from './api/fetchCategories';

const Shop = () => {
  const hasFetched = useRef(false);
  useEffect(()=>{
    if (hasFetched.current) {
      console.log(" Categories already fetched, skipping double call");
      return;
    }

    hasFetched.current = true;

    fetchCategories().then(res =>{
       console.log("Categories",res); 
    }).catch(err=>{
      console.log("Error",err);
    })
  },[]);

  return (
    <>
      <HeroSection />
      <NewArrivals />
      {content?.pages?.shop?.sections && content?.pages?.shop?.sections?.map((section, index) => (
        <Category key={section?.title + index} section={section} />
      ))}
      <Footer content={content?.footer} />
    </>
  );
};

export default Shop;