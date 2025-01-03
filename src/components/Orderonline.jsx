import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';


import slide1 from '../assets/home/slide1.jpg'
import slide2 from '../assets/home/slide2.jpg'
import slide3 from '../assets/home/slide3.jpg'
import slide4 from '../assets/home/slide4.jpg'
import slide5 from '../assets/home/slide5.jpg'


// import './styles.css';


const Orderonline = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img className='w-full' src={slide1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full' src={slide2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full' src={slide3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img  className='w-full' src={slide4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
            <img className='w-full' src={slide5} alt="" />
            </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Orderonline;
