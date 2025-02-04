import React from 'react'
import SectionHeading from '../../SectionsHeading/SectionHeading'
import Card from '../../Card/Card';
import Glasses from '../../../assets/images/Glasses.jpg';
import Armring from '../../../assets/images/Armring.jpg';
import Rings from '../../../assets/images/Rings.jpg';
import Watch from '../../../assets/images/Watch.jpg';

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
]

const NewArrivals = () => {
  return (
    <>
    <SectionHeading title={'New Arrivals'}/>
    <div className='flex flex-wrap p-[20px]'>
      {items && items?.map((item,index)=> 
      <Card key={item?.title+index} tiltle={item.title} imagePath={item.imagePath}/>)}
    </div>
    </>
  )
}

export default NewArrivals