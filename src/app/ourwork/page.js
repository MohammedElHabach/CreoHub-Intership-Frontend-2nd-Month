"use client";
import React, { useState } from 'react'
import Navbar from "../../components/Navbar"
import MySwiper from '../../components/Swiper';
import axios from '@/utils/axios';
import CardSwiper from "../../components/CardSwiper"
import { SwiperSlide, useSwiperSlide } from 'swiper/react';

const getProjects = async () => {

  try {
    const response = await axios.get("/projects", {
      headers: {
        "Accept-Language": "en", 
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const page = async () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);


  const projects= await getProjects()
  // console.log(projects.data);


  const slidesPerView=1
    const breakPointsForCategories = {
        
        640: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      }

      const handleSlideChange = (swiper) => {
        setActiveSlideIndex(swiper.activeIndex);
      };


  return ( 
    <>
        <Navbar/>
        <div className='xl:container mx-auto mt-16 '>
            <h2 className='text-3xl font-bold text-center'>Our Work</h2>

            <div className=' pt-5 px-5  container mx-auto'>  
                    <MySwiper slidesPerView={slidesPerView} breakpoints={breakPointsForCategories} onSlideChange={handleSlideChange}>
                    {projects.data.map((elt,index) => (
                        <SwiperSlide key={elt.id}>
                            <CardSwiper key={elt.id} img={elt.image}  title={elt.title} desc={elt.text} style={{opacity: activeSlideIndex === index ? "1" : "0.2"}} />
                        </SwiperSlide>
                        ))}
                    </MySwiper>
              </div>
        </div>
    </>
  )
}

export default page