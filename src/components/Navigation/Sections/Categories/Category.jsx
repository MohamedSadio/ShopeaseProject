import React from 'react'
import SectionHeading from '../../../SectionsHeading/SectionHeading'
import Card from '../../../Card/Card'

const Category = ({title,data}) => {
  return (
    <>
    <SectionHeading title={title}/>
    <div div className='flex px-8'>
    {data && data?.map((item,index)=>{
        return (
            <Card key={index} title={item?.title} description={item?.description} imagePath={item?.image}
             actionArrow={true} height={'200px'} width={'240px'}/>
        )
    })}
    </div>
    </>
  )
}

export default Category