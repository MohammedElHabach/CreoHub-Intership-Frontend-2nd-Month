"use client"
import { useEffect } from 'react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const useAnimation = (elementClass) => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline();
    
        tl.fromTo(`.${elementClass}`, { opacity: 0 }, { opacity: 1, duration: 0.9, y: -40, ease: Power3.easeOut });
    
        ScrollTrigger.create({
          trigger: `.${elementClass}`,
          start: 'top center',
          onEnter: () => tl.play(),
          onLeaveBack: () => tl.reverse(),
          onEnterBack: () => tl.play(),
        });
      }, [elementClass]);
}

export default useAnimation