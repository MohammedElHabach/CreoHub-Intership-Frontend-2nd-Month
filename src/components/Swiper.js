"use client";
import React, { useEffect, useState } from "react";
import { Swiper } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import CardSwiper from "./CardSwiper";
import { SwiperSlide } from "swiper/react";
import { useRouter } from "next/navigation";

const MySwiper = ({ projects }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const router = useRouter();

 

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
    console.log("on slide change", swiper.realIndex);
  };
  return (
    <div className="ourwork">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={40}
      loop
      scrollbar
      navigation
      slidesPerView={1}
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={handleSlideChange}
      centeredSlides
    >
      {projects.map((elt, index) => (
        <SwiperSlide key={elt.id}>
          <div className=" cursor-pointer" onClick={() => { router.push(`/ourwork/${elt.id}`)}}>
            <CardSwiper
              key={elt.id}
              img={elt.image}
              title={elt.title}
              desc={elt.text}
              isActive={index === activeSlideIndex}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default MySwiper;
