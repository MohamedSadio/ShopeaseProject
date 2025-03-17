import React, { useCallback, useState } from 'react'

export const colorSelector = {
  "Purple": "#8434E1",
  "Black": "#252525",
  "White": "#FFFFFF",
  "Gray": "#808080",
  "Blue": "#0000FF",
  "Red": "#FF0000",
  "Orange": "#FFA500",
  "Navy": "#000080",
  "Grey": "#808080",
  "Yellow": "#FFFF00",
  "Pink": "#FFC0CB",
  "Green": "#008000",
  "Gold": "#FFD700",
  "Silver": "#C0C0C0",
  "Champ": "#F7E7CE",
  "Baby-blue": "#89CFF0",
  "Brown": "#A52A2A"
};

const ColorsFilter = ({colors}) => {
  const [appliedColors, setAppliedColors] = useState([]);
  
  const onClickDiv = useCallback((item) => {
    if(appliedColors.indexOf(item) > -1){
      setAppliedColors(appliedColors?.filter(color => color !== item));
    } else {
      setAppliedColors([...appliedColors, item]);
    }
  }, [appliedColors, setAppliedColors]);

  return (
    <div className='flex flex-col mb-4'>
        <p className='text-sm sm:text-base text-black mt-3 sm:mt-4 mb-2 sm:mb-3'>Colors</p>
        <hr className='mb-2' />
        <div className='flex flex-wrap p-2 sm:p-3'>
          {colors?.map((item, index) => {
            return (
              <div key={index} className='flex flex-col mr-1 sm:mr-2 mb-2 items-center'>
                <div 
                  className='w-6 h-6 sm:w-8 sm:h-8 border rounded-lg sm:rounded-xl cursor-pointer hover:scale-110 transform'
                  onClick={() => onClickDiv(item)} 
                  style={{background: `${colorSelector[item]}`}}
                ></div>
                <p 
                  className='text-xs sm:text-sm text-gray-500 mt-1' 
                  style={{color: `${appliedColors?.includes(item) ? 'black' : ''}`}}
                >
                  {item}
                </p>
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default ColorsFilter