import React, { useMemo } from 'react';
import FilterIcon from '../../components/common/FIlterIcon';
import content from '../../data/content.json'
import Categories from '../../components/Filters/Categories'

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {
  
  const categoryContent = useMemo(()=>{
    return categories?.find((category)=>category.code === categoryType)
  },[categoryType]) ;

  return (
    <>      
      <div className='flex'>
        <div className='w-20% p-20px border rounded-lg m-20px'>
          {/*Filters */}
          <div className='flex justify-between'>
            <p className='text-16px text-gray-600'>FIltre</p>
            <FilterIcon />

          </div>
          <div>
            <p className='text-16px text-black mt-5'>Categories</p>
            <Categories types={categoryContent?.types}/>
          </div>
        </div>

        <div className='p-15px'>
          <p className='text-black text-lg'>{categoryContent?.description}</p>
          {/*Product */}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;