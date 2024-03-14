"use client";
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useEffect, useRef } from 'react';

const AboutVideo = () => {

    const videoRef = useRef(null);


    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const tl = gsap.timeline().paused(true);
    
    
        // tl.fromTo(".ai-video", { opacity: 0 ,x:-1000}, { opacity: 1, duration: 0.9,x:0, ease: Power3.easeOut })    
       
          ScrollTrigger.create({
            trigger: ".ai-video", 
            start: 'top center', 
            onEnter: () => {
                tl.play();
                if (videoRef.current) {
                    videoRef.current.play();
                }
            },
            onLeaveBack: () => {
                tl.reverse();
                videoRef.current.pause();
            },
            onLeave: () => {
                tl.reverse();
                videoRef.current.pause();
            },
            onEnterBack:() => {
                tl.play();
                videoRef.current.play();
            } 
          });
      }, []);
  return (
    <div className="xl:container mx-auto  px-32 mt-10 ">
      <video className='ai-video' muted ref={videoRef} controls>
        <source src="/ai.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default AboutVideo;
