"use client"
import gsap, { Power3 } from 'gsap';
import React, { useEffect } from 'react';

const HeroSection = () => {
  useEffect(() => {
    const tl = gsap.timeline();

    tl.fromTo("#hero img", { opacity: 0 }, { opacity: 1, duration: 0.9, y: -40, ease: Power3.easeOut })
      .fromTo("#hero h1", { opacity: 0}, { opacity: 1, duration: 0.9, y: -40, ease: Power3.easeOut } ,.6);

  }, []);

  return (
    <section id='hero'>
      <div className='xl:container mx-auto mt-16 px-12 flex justify-center items-center relative'>
        <img className='' src="/bannerbg.png" alt="banner" />
        <h1 className='absolute leading-relaxed sm:leading-relaxed text-3xl sm:text-4xl md:text-5xl md:leading-relaxed'>Here’s a teeny-weeny <br /> glimpse of our work. <br /> What’s coming later is <br /> <span className='text-pink font-bold ml-16 md:ml-28'>even </span> greater</h1>
      </div>
    </section>
  );
};

export default HeroSection;
