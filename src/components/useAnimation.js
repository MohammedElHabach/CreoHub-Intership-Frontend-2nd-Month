"use client"
import { useEffect } from 'react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const useAnimation = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline().paused(true);

        tl.fromTo(`.fadeup`, { opacity: 0,y:40 }, { opacity: 1, duration: 0.9, y: 0, ease: Power3.easeOut });
    
        ScrollTrigger.create({
          trigger: `.fadeup`,
          start: 'top center',
          onEnter: () => tl.play(),
          onLeave:()=>tl.reverse(),
          onLeaveBack: () => tl.reverse(),
          onEnterBack: () => tl.play(),
        });
      }, []);
}

export default useAnimation