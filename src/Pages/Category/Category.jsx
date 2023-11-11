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


const Category = () => {
  return (
    <>
     <div className='my-8 mt-20'>

<div className="w-full flex flex-col justify-center items-center">
    <h3 className="text-yellow-600 text-xl">---From 11:00am to 10:00pm---</h3>
    <hr className='my-3 w-[424px] bg-slate-900 opacity-10  h-1'/>
    <p className="text-slate-300 md:text-5xl text-3xl">ORDER ONLINE</p>
    <hr className='my-3 w-[424px] bg-slate-900 opacity-10  h-1'/>
</div>

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
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center'>
           Salads </h3>
            </SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide2} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center'>
           Desserts </h3></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide3} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center'>
           Soups </h3></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide4} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center'>
           Pizzas </h3></SwiperSlide>
        <SwiperSlide><img className='h-full w-full' src={slide5} />
        <h3 className='text-uppercase md:text-4xl sm:text-3xl text-2xl -mt-20 text-white shadow-xl text-center'>
           Salads </h3></SwiperSlide>
    
      </Swiper>
     </div>
    </>
  )
}

export default Category
