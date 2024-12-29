import React from 'react'
import SectionTitle from '../Components/SectionTitle'
import featuredImg from '../assets/home/featured.jpg'
function Featured() {
  return (
    <div className='bg-featuredBg bg-current bg-cover h-[600px] w-full bg-fixed '>
      <div className='px-3 md:px-32 lg:px-56 py-10 bg-black/60 backdrop-blur-sm w-full h-full bg-fixed '>
      <section>
        <SectionTitle heading='---Check it out---' title='FEATURED ITEM FROM OUR MENU' color='text-white/80' textHeading='text-yellow-400'/>
      </section>

      {/* card section */}
      <section className='mt-10 grid lg:grid-cols-12 gap-5 items-center'>
        <div className='col-span-6'><img src={featuredImg} className='w-96 rounded-xl' alt="" /></div>
        {/* text section */}
        <div className='col-span-6 flex flex-col gap-y-5'>
<p className='text-md font-semibold text-white/70'>March 20, 2023</p>
<h1 className='text-2xl font-bold text-white/70'>WHERE CAN I GET SOME?</h1>
<p className='text-sm font-semibold text-white/70'>In Express, when you use route parameters (params), you define them in the backend route with a colon (:). On the front-end, you need to construct the URL dynamically to include the parameter values in the correct place in the path.</p>
<button className='btn border-t-0 border-r-0 border-l-0 text-xl  text-white/90 text-center bg-orange-600 bg-transparent'>Read More ..</button>
        </div>
      </section>
      </div>
    </div>
  )
}


export default Featured
