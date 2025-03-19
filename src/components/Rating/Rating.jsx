import React, { useMemo } from 'react'
import SvgStarIcon from '../common/SvgStartIcon';
import { SvgEmptyStar } from '../common/SvgEmptyStart';

const Rating = ({rating}) => {
    const ratingNmber = useMemo(()=>{
        return Array(Math.floor(Number(rating))).fill()
    },[rating]);

  return (
    <div className='flex items-center'>
        {ratingNmber?.map((_,index)=>(
            <SvgStarIcon key={index}/>
        ))}
        {
            new Array(5-ratingNmber.length).fill().map((_,index)=>(
                <SvgEmptyStar key={'empty-' +index}/>
            ))
        }
        <p className='px-2 text-gray-500'>{rating}</p>
    </div>
  )
}

export default Rating