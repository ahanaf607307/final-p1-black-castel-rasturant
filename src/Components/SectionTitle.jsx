import React from 'react'

function SectionTitle({heading , title , color , headingColor}) {
  return (
    <div className='flex flex-col justify-center gap-y-3 items-center text-center'>
      <h1 className={`text-md font-semibold ${headingColor}`}>{heading}</h1>

      <h3 className={`text-xl md:text-3xl lg:text-4xl py-4 border-dotted border-y-gray-300 font-bold border-y-4  ${color} `}>{title}</h3>

    </div>
  )
}

export default SectionTitle
