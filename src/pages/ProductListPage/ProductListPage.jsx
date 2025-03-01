import React from 'react';
//import Navigation from '../../components/Navigation/Navigation';
import FilterIcon from '../../components/common/FIlterIcon';

const ProductListPage = () => {
  return (
    <>      
      <div className='flex'>
        <div className='w-20% p-20px border rounded-lg m-20px'>
          {/*Filters */}
          <div className='flex justify-between'>
            <p className='text-16px text-gray-600'>Filter</p>
            <FilterIcon />
          </div>
          <div>
            <p className='text-16px text-black mt-5'>Categories</p>
            
          </div>
        </div>

        <div className='p-40px'>
          <p>Hello p</p>
          {/*Product */}
        </div>
      </div>
    </>
  );
};

export default ProductListPage;