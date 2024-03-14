"use client";
import React, { useEffect, useRef, useState } from "react";
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
import { SwiperSlide } from "swiper/react";
import Navbar from "../../components/Navbar";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Footer from "@/components/Footer";
import OurClientImage from "../../components/OurClientImage";
import DialogDefault from "@/components/Dialog"
const ourClients = () => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const swiperRef = useRef(null);

  const handleSlideChange = (swiper) => {
    setActiveSlideIndex(swiper.realIndex);
    console.log("on slide change", swiper.realIndex);
  };

  const handleNextSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrevSlide = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const content = [
    {
      title:"Consolidated Reporting",
      text:"Lorem ipsum dolor sit amet consectetur adipisicing elit.Officia et totam libero ducimus magni? Ipsam similique est,quo labore vel recusandae blanditiis necessitatibus, quameligendi, rem eum dolor quidem vero!"
    },
    {
      title:"Estate Planning & Structuring",
      text:"The curious cat chased colorful butterflies through the enchanting garden, creating a whimsical dance of flutterin wings and furry paws. Meanwhile, a wise owl observed from the ancient branches, sharing ancient tales with the rustling leaves."
    },
    {
      title:"Real Estate Solutions",
      text:" In a distant land, adventurous explorers embarked on a journey to discover hidden treasures and unlock the mysteries of a forgotten civilization."
    },
    {
      title:"Private Office",
      text:"The sun dipped below the horizon, painting the sky in hues of orange and pink, bidding farewell to another day filled with tales untold."
    }
  ];
  return (
    <>
      <Navbar />
      <section id="our clients">
        <div className="xl:container mx-auto px-12 mt-20">
          <div className="md:grid md:grid-cols-2 md:gap-x-10 ">
            <div className="mt-10">
              {content.map((elt, index) => (
                <p
                  key={index}
                  className={`${
                    activeSlideIndex === index ? "font-bold " : "mr-7 sm:mr-16"
                  } uppercase text-sm sm:text-xl border-b  py-3`}
                >
                  {elt.title}
                </p>
              ))}

              <div className="flex justify-end mt-4 space-x-4 ">
                <div
                  className=" rounded-full p-1 border cursor-pointer"
                  onClick={handlePrevSlide}
                >
                  <ArrowBackIcon />
                </div>
                <div
                  className="rounded-full p-1 border cursor-pointer"
                  onClick={handleNextSlide}
                >
                  <ArrowForwardIcon />
                </div>
              </div>
            </div>

            <div className=" bg-slate-800 mt-10 p-10 ourclient">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                centeredSlides
              >
                {content.map((elt,index) => (
                  <SwiperSlide key={index}>
                    <p key={index} >
                      {elt.text}
                    </p>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <OurClientImage/>
          <div className="mt-16">
              <DialogDefault/>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ourClients;
