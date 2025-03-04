import React from 'react';
import HeroSection from './components/HeroSection/HeroSection';
import NewArrivals from './components/Navigation/Sections/NewArrivals';
import Category from './components/Navigation/Sections/Categories/Category';
import content from './data/content.json';
import Footer from './components/Navigation/Footer/Footer';

const Shop = () => {
  return (
    <>
      <HeroSection />
      <NewArrivals />
      {/* Utilise content.pages.shop.sections au lieu de content.categories */}
      {content?.pages?.shop?.sections && content?.pages?.shop?.sections?.map((section, index) => (
        <Category key={section?.title + index} section={section} />
      ))}
      <Footer content={content?.footer} />
    </>
  );
};

export default Shop;