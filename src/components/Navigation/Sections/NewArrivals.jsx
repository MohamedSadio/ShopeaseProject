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

const items = [{
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
    <>
    <SectionHeading title={'New Arrivals'}/>
    <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={false}
        showDots={false}
        infinite={false}
        partialVisible={false}
        itemClass={'react-slider-custom-item'}
        className='px-8'
      >
        {items && items?.map((item,index)=> <Card key={item?.title +index} title={item.title} imagePath={item.imagePath}/>)}

      </Carousel>
    </>
  )
}
export default NewArrivals