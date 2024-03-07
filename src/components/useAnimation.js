"use client"
import { useEffect } from 'react';
import gsap, { Power3 } from 'gsap';
import { ScrollTrigger } from 'gsap/all';

const useAnimation = () => {
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline().paused(true);
        const tl2 = gsap.timeline().paused(true);
        const tl3 = gsap.timeline().paused(true);


        tl.fromTo(`.fadeup`, { opacity: 0,y:40 }, { opacity: 1, duration: 0.9, y: 0, ease: Power3.easeOut });
        tl2.fromTo(`.lineAnimation`, { height: 0 }, { duration: 0.9, height:130, ease: Power3.easeOut });
        tl3.fromTo(`.ballAnimation`, { width: 0 }, { duration: 0.9, width:20, ease: Power3.easeOut },.6);

    
        ScrollTrigger.create({
          trigger: `.fadeup`,
          start: 'top center',
          onEnter: () => tl.play(),
          onLeave:()=>tl.reverse(),
          onLeaveBack: () => tl.reverse(),
          onEnterBack: () => tl.play(),
        });

        ScrollTrigger.create({
            trigger: `.memberAnimation`,
            start: 'top center',
            onEnter: () => tl2.play(),
            onLeaveBack: () => tl2.reverse(),
            onEnterBack: () => tl2.play(),
          });

          ScrollTrigger.create({
            trigger: `.memberAnimation`,
            start: 'top center',
            onEnter: () => tl3.play(),
            onLeaveBack: () => tl3.reverse(),
            onEnterBack: () => tl3.play(),
          });
      }, []);
}

export default useAnimation