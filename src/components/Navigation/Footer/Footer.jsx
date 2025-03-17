import React from 'react'
import FbIcon from '../../common/FbIcon'
import InstaIcon from '../../common/InstaIcon'

const Footer = ({content}) => {
  return (
    <div className='bg-black text-white'>
        <div className='flex flex-col md:flex-row p-4 md:p-8 justify-around'>
          {content?.items && content?.items?.map((item, index) => {
            return (
              <div key={index} className='flex flex-col mb-6 md:mb-0'>
                <p className='text-base font-medium pb-2'>{item?.title}</p>
                {item?.list && item?.list?.map((listItem, index) => (
                  <a 
                    key={index} 
                    className='text-xs py-2' 
                    href={listItem?.path}
                  >
                    {listItem?.label}
                  </a>
                ))}
                {item?.description && <p className='text-xs mt-2'>{item?.description}</p>}
              </div>
            )
          })}
        </div>
        <div className='flex gap-4 items-center justify-center py-4'>
          <a href="/fb"><FbIcon/></a>
          <a href="/instagram"><InstaIcon/></a>
        </div>
        <p className='text-xs md:text-sm text-white text-center pb-4'>{content?.Copyright}</p>
    </div>
  )
}

export default Footer