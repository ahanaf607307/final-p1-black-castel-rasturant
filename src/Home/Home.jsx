import React from 'react'
import Reviews from '../Components/Reviews'
import Banner from './Banner'
import Category from './Category'
import Featured from './Featured'
import PopularMenu from './PopularMenu'
import Recomended from './Recomended'
import { Helmet } from 'react-helmet-async'

function Home() {
  return (
    <div>
      <Helmet>
        <title>Home | Black Castel</title>
      </Helmet>
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
 <div className='my-16'>
 <Reviews/>
 </div>
    </div>
  )
}

export default Home
