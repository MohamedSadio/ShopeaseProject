import React, { useState } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import './PriceFilter.css';

const PriceFilter = () => {
    const [range, setRange] = useState({
        min: 10000,
        max: 300000
    });

    return (
        <div className='flex flex-col mb-4'>
            <p className='text-sm sm:text-base text-black mt-3 sm:mt-4'>Price</p>
            <hr className='my-2' />
            <RangeSlider
                className={"custom-range-slider"}
                min={0}
                max={500000}
                defaultValue={[range.min, range.max]}
                onInput={(values) => setRange({
                    min: values[0],
                    max: values[1]
                })}
            />

            <div className='flex justify-between gap-2 mt-2'>
              <div className='border rounded-lg h-7 sm:h-8 mt-2 sm:mt-3 w-5/12 sm:w-2/5 flex items-center'>
                <p className='pl-2 sm:pl-3 text-xs sm:text-sm text-gray-600'>f</p>
                <input
                    type="number"
                    value={range.min}
                    className='outline-none px-1 sm:px-2 w-4/5 text-xs sm:text-sm text-gray-600'
                    min={0} max="499" disabled placeholder='min'/>
              </div>
              <div className='border rounded-lg h-7 sm:h-8 mt-2 sm:mt-3 w-5/12 sm:w-2/5 flex items-center'>
                <p className='pl-2 sm:pl-3 text-xs sm:text-sm text-gray-600'>f</p>
                <input
                    type="number"
                    value={range.max}
                    className='outline-none px-1 sm:px-2 w-4/5 text-xs sm:text-sm text-gray-600'
                    min={0} max="499" disabled placeholder='max'/>
              </div>
            </div>
        </div>
    );
};

export default PriceFilter;