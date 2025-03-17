import React, { useCallback, useEffect, useState } from 'react'

const SizeFilter = ({sizes, hidleTitle, multi=true, onChange}) => {
  const [appliedSize, setAppliedSize] = useState([]);
  
  const onClickDiv = useCallback((item) => {
    if(appliedSize.indexOf(item) > -1){  
      setAppliedSize(appliedSize?.filter(size => size !== item));
    }
    else{
      if(multi){
        setAppliedSize([...appliedSize, item]);
      }
      else{
        setAppliedSize([item]);
      }
    }
  }, [appliedSize, multi]);

  useEffect(() => {
    onChange && onChange(appliedSize);
  }, [appliedSize, onChange]);

  return (
    <div className={`flex flex-col ${hidleTitle ? '' : 'mb-4'}`}>
        {!hidleTitle && (
          <p className='text-sm sm:text-base text-black mt-3 sm:mt-4 mb-2 sm:mb-3'>Size</p>
        )}
        <div className='flex flex-wrap px-1 sm:px-2 gap-2'>
            {sizes?.map((item, index) => {
              return (
                <div key={index} className='flex flex-col'>
                  <div 
                    className='w-10 sm:w-12 h-7 sm:h-8 border text-center rounded-lg cursor-pointer 
                    hover:scale-110 transform bg-white border-gray-500 text-gray-500 text-xs sm:text-sm flex items-center justify-center' 
                    style={appliedSize?.includes(item) ? {
                      background: 'black',
                      color: 'white'
                    } : {}} 
                    onClick={() => onClickDiv(item)}
                  >
                    {item}
                  </div>
                </div>
              )
            })}
        </div>
    </div>
  )
}

export default SizeFilter