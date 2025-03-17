import React from 'react'
import SectionHeading from '../../SectionsHeading/SectionHeading'
import Card from '../../Card/Card';
import Glasses from '../../../assets/images/Glasses.jpg';
import Armring from '../../../assets/images/Armring.jpg';
import Rings from '../../../assets/images/Rings.jpg';
import Watch from '../../../assets/images/Watch.jpg';
import Carousel from 'react-multi-carousel';
import { responsive } from '../../SectionsHeading/utils/Section.constants';
import 'react-multi-carousel/lib/styles.css';
import './NewArrivals';

// Updated responsive configuration to be more mobile-friendly
const customResponsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 4,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    partialVisibilityGutter: 30
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
    partialVisibilityGutter: 20
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 10
  }
};

const items = [
  {
    'title':'Glasses',
    imagePath:Glasses
  },
  {
    'title':'Armring',
    imagePath:Armring
  },
  {
    'title':'Rings',
    imagePath:Rings
  },
  {
    'title':'Watch',
    imagePath:Watch
  },
  {
    'title':'Chain',
    imagePath:require('../../../assets/images/chain.jpg')
  }
]

const NewArrivals = () => {
  return (
    <div className="w-full overflow-hidden">
      <SectionHeading title={'New Arrivals'}/>
      <Carousel
        responsive={customResponsive || responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={false}
        partialVisible={false}
        itemClass={'react-slider-custom-item'}
        className='px-10px md:px-20px lg:px-8'
      >
        {items && items?.map((item,index)=> 
          <Card 
            key={item?.title + index} 
            title={item.title} 
            imagePath={item.imagePath}
            actionArrow={true} // Added action arrow for better UI
          />
        )}
      </Carousel>
    </div>
  )
}

export default NewArrivals