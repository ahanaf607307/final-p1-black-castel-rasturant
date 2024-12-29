import React from 'react';
import { Parallax } from 'react-parallax';

function Cover({img,heading , title , headingColor , bannerHeignt}) {
  return (


        <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
        >
            <div className={`${bannerHeignt} w-full bg-black/50 flex flex-col justify-center items-center text-center gap-y-5 `} >
<h1 className={`uppercase text-3xl md:text-4xl lg:text-5xl font-bold ${headingColor}`}>{heading}</h1>
     <p className='text-md md:text-xl font-semibold text-orange-500 lg:px-44 md:px-28 px-5'>{title}</p> 
    </div>
        </Parallax>

    
    
  )
}

export default Cover
