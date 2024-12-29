import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Pagination } from 'swiper/modules';


// import custom css 
// import './style.css';

// import image 
import slide1 from '../assets/home/slide1.jpg';
import slide2 from '../assets/home/slide2.jpg';
import slide3 from '../assets/home/slide3.jpg';
import slide4 from '../assets/home/slide4.jpg';
import slide5 from '../assets/home/slide5.jpg';
import SectionTitle from '../Components/SectionTitle';


function Category() {
  return (
    <div >
    <section className='my-12'>
        <SectionTitle heading={'---From 11:00am to 10:00pm---'} title={'ORDER ONLINE'} color={'text-orange-500'}/>
    </section>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={false}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper cursor-pointer "
      >
     
        <SwiperSlide className='relative'>
            <img src={slide2} alt="" />
            <h1 className=' absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide5} alt="" /> 
            <h1 className=' absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide  className='relative'>
            <img src={slide4} alt="" />  
            <h1 className='  absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide1} alt="" />
            <h1 className='  absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide3} alt="" />
            <h1 className='  absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide2} alt="" />
            <h1 className='  absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide5} alt="" /> 
            <h1 className='  absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide4} alt="" />  
            <h1 className='  absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide1} alt="" />
            <h1 className='  absolute bottom-5 left-20  text-white/70 text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        <SwiperSlide className='relative'>
            <img src={slide3} alt="" />
            <h1 className='  mb-10  text-black text-4xl text-center'>Salads</h1>
        </SwiperSlide>
        
      </Swiper>
    </div>
  )
}

export default Category
