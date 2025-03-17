import React from 'react'
import PropTypes from 'prop-types'

const SectionHeading = ({title}) => {
  return (
    <div className='flex flex-wrap px-4 sm:px-6 md:px-10 my-3 md:my-5 items-center gap-2'>
        <div className='border rounded border-1 bg-black w-1.5 md:w-2 h-8 md:h-10'></div>
        <p className='text-xl sm:text-2xl md:text-3xl font-medium'>{title}</p>
    </div>
  )
}

SectionHeading.defaultProps = {
  title: ''
}

SectionHeading.propTypes = {
  title: PropTypes.string
}

export default SectionHeading