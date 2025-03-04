import React from 'react'

const categoriesData = [

]

const Categories = ({types}) => {
  return (
    <div >
        {types?.map((type)=>{
            return(
              <div className='flex'>
                <input type="checkbox" name={type?.code} className='border rounded-lg w-4 h-4 accent-black text-black' />
                <label htmlFor={type?.code}>{type?.name}</label>
              </div>
            )
        })}
    </div>
  )
}

export default Categories