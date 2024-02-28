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

  const titleContent = [
    "Consolidated Reporting",
    "Estate Planning & Structuring",
    "Real Estate Solutions",
    "Private Office",
  ];
  return (
    <>
      <Navbar />
      <section id="our clients">
        <div className="xl:container mx-auto px-12 mt-20">
          <div className="md:grid md:grid-cols-2 md:gap-x-10 ">
            <div className="mt-10">
              {titleContent.map((content, index) => (
                <p
                  key={index}
                  className={`${
                    activeSlideIndex === index ? "font-bold" : ""
                  } uppercase text-xl border-b py-3`}
                >
                  {content}
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

            <div className="bg-slate-800 mt-10 p-10">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={40}
                slidesPerView={1}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                onSlideChange={handleSlideChange}
                centeredSlides
              >
                <SwiperSlide>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Officia et totam libero ducimus magni? Ipsam similique est,
                    quo labore vel recusandae blanditiis necessitatibus, quam
                    eligendi, rem eum dolor quidem vero!
                  </p>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    The curious cat chased colorful butterflies through the
                    enchanting garden, creating a whimsical dance of fluttering
                    wings and furry paws. Meanwhile, a wise owl observed from
                    the ancient branches, sharing ancient tales with the
                    rustling leaves.
                  </p>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    In a distant land, adventurous explorers embarked on a
                    journey to discover hidden treasures and unlock the
                    mysteries of a forgotten civilization.
                  </p>
                </SwiperSlide>

                <SwiperSlide>
                  <p>
                    The sun dipped below the horizon, painting the sky in hues
                    of orange and pink, bidding farewell to another day filled
                    with tales untold.
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ourClients;
