"use client"
import gsap, { Power3 } from 'gsap';
import React, { useEffect } from 'react'

const AboutSection = ({text,span,img,rightPos,leftPos,sectionId}) => {

  useEffect(() => {
    const tl = gsap.timeline();
    const tl2 = gsap.timeline();


    tl.fromTo("#about .firstSecImg", { opacity: 0 ,x:-1000}, { opacity: 1, duration: 0.9,x:0, ease: Power3.easeOut })
      .fromTo("#about .firstSecH1", { opacity: 0,x:1000}, { opacity: 1, duration: 0.9,x:0, ease: Power3.easeOut });

    tl2.fromTo("#about .secondSecImg", { opacity: 0 ,x:1000}, { opacity: 1, duration: 0.9,x:0, ease: Power3.easeOut })
      .fromTo("#about .secondSecH1", { opacity: 0,x:-1000}, { opacity: 1, duration: 0.9,x:0, ease: Power3.easeOut });

  }, []);
  return (
    <section id='about'>
        <div className='xl:container mx-auto  px-12 mt-10 '>
            <div className={`flex flex-col-reverse   ${rightPos ? 'md:flex-row':'md:flex-row-reverse'}   items-center relative`}>
                <img className={` ${sectionId === "firstSec" ? 'firstSecImg':'secondSecImg'} w-[920px] h-[500px] pt-4 md:pt-0`} src={img} alt="image" />
                <h1 className={`${sectionId === "firstSec" ? 'firstSecH1':'secondSecH1'} text-xl md:text-2xl text-center  md:text-start whitespace-pre-line md:absolute  ${rightPos} ${leftPos}  `}>{text}<span className='text-red-500'>{span}</span></h1>
            </div>
        </div>

    </section>
  )
}

export default AboutSection