import React, { useMemo, useState } from 'react';
import FilterIcon from '../../components/common/FIlterIcon';
import content from '../../data/content.json'
import Categories from '../../components/Filters/Categories'
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';

const categories = content?.categories;

const ProductListPage = ({categoryType}) => {
  const [showFilters, setShowFilters] = useState(false);
  
  const categoryContent = useMemo(()=>{
    return categories?.find((category)=>category.code === categoryType)
  },[categoryType]);
  
  const productListItems = useMemo(()=>{
    return content?.products?.filter((product)=> product?.category_id === categoryContent?.id);
  },[categoryContent]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <>      
      <div className='flex flex-col md:flex-row'>
        {/* Mobile Filter Toggle Button */}
        <div className='md:hidden flex justify-between items-center p-4 border-b'>
          <p className='text-base font-medium'>Products</p>
          <button 
            onClick={toggleFilters}
            className='flex items-center gap-2 text-sm'
          >
            <span>Filters</span>
            <FilterIcon />
          </button>
        </div>

        {/* Filters Sidebar - hidden on mobile by default, always visible on md+ screens */}
        <div className={`${showFilters ? 'block' : 'hidden'} md:block w-full md:w-1/4 lg:w-1/5 p-4 md:p-5 border rounded-lg m-2 md:m-5`}>
          <div className='flex justify-between items-center'>
            <p className='text-base text-gray-600'>Filters</p>
            <div className='cursor-pointer md:cursor-default' onClick={() => setShowFilters(false)}>
              <FilterIcon />
            </div>
          </div>
          <div>
            <p className='text-base text-black mt-4'>Categories</p>
            <Categories types={categoryContent?.types}/>
            <p></p>
            <hr className='my-3'></hr>
          </div>
          <div>
            {/*Prices */}
            <PriceFilter/>
            <hr className='my-3'></hr>
            {/*Colors */}
            <ColorsFilter colors={categoryContent?.meta_data?.colors}/>
            <hr className='my-3'></hr>
            {/*Sizes */}
            <SizeFilter sizes={categoryContent?.meta_data?.sizes}/>
          </div>
        </div>

        <div className='p-4 md:p-5 w-full md:w-3/4 lg:w-4/5'>
          <p className='text-black text-base md:text-lg mb-4'>{categoryContent?.description}</p>
          {/*Product */}
          <div className='pt-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8'>
            {productListItems?.map((item,index)=>{
              return <ProductCard key={index} {...item}/>
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductListPage;