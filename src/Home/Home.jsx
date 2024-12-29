import React from 'react'
import Banner from './Banner'
import Category from './Category'
import Featured from './Featured'
import PopularMenu from './PopularMenu'
import Recomended from './Recomended'

function Home() {
  return (
    <div>
  <Banner/>
 <div className='my-16'>
 <Category/>
 </div>
 <div className='my-16'>
 <PopularMenu/>
 </div>
 <div className='my-16'>
 <Featured/>
 </div>
 <div className='my-16'>
 <Recomended/>
 </div>
    </div>
  )
}

export default Home
