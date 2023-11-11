import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper/modules';
import slide1 from '../../assets/home/slide1.jpg'
import slide2 from '../../assets/home/slide4.jpg'
import slide3 from '../../assets/home/slide3.jpg'
import slide4 from '../../assets/home/slide2.jpg'
import slide5 from '../../assets/home/slide5.jpg'
import SectionTitle from './../../Components/SectionTitle/SectionTitle';


const Category = () => {
  return (
    <>
     <div className='my-8 mt-20'>

<SectionTitle heading={'From 11:00am to 10:00pm'} subHeading={'ORDER ONLINE'} />

     <Swiper
        slidesPerView={3} 
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide><img className='h-full w-full' src={slide1} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center font-serif'>
           Salads </h3>
            </SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide2} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 mb-6 text-white shadow-xl text-center font-serif'>
           Desserts </h3></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide3} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center font-serif'>
           Soups </h3></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide4} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center font-serif'>
           Pizzas </h3></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide5} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center font-serif'>
           Salads </h3></SwiperSlide>
    
      </Swiper>
     </div>
    </>
  )
}

export default Category
