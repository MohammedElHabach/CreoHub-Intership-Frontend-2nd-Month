// Swiper.js
import React from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Virtual } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const MySwiper = ({ children,breakpoints,slidesPerView,onSlideChange }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y,]}
      spaceBetween={40}
    //   loop={false}
    scrollbar
    navigation
      slidesPerView={slidesPerView}
      breakpoints={breakpoints}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={onSlideChange}
      centeredSlides
    >
      {children} 
    </Swiper>
  );
};

export default MySwiper;
