"use client"
import gsap, { Power3 } from "gsap";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  

  const moveCursor = (e) => {

    gsap.to(cursorRef.current,{
        x:e.clientX,
        y:e.clientY,
        ease:Power3.easeOut,
    })
    
    gsap.to(followerRef.current,{
        x:e.clientX,
        y:e.clientY,
        ease:Power3.easeOut,
    })

    

  }

  useEffect(() => {
    gsap.set(cursorRef,{ 
        xPercent: 100,
        yPercent: 100 ,
        duration:.2,

    });

    gsap.set(followerRef, {
      xPercent: -20,
      yPercent: -20,
      duration:.5,
    });

    const handleMouseEnter = () => {
      gsap.to(followerRef.current, {
        width: "50px", 
        height: "50px", 
        ease: Power3.easeOut,
      });
    };
  
    const handleMouseLeave = () => {
      gsap.to(followerRef.current, {
        width: "30px", 
        height: "30px",
        ease: Power3.easeOut,
      });
    };

    window.addEventListener("mousemove",moveCursor)

    const linkElements = document.getElementsByClassName("linkCursor");
    Array.from(linkElements).forEach(linkElement => {
    linkElement.addEventListener("mouseenter", handleMouseEnter);
    linkElement.addEventListener("mouseleave", handleMouseLeave);
  });

  return () => {
    Array.from(linkElements).forEach(linkElement => {
      linkElement.removeEventListener("mouseenter", handleMouseEnter);
      linkElement.removeEventListener("mouseleave", handleMouseLeave);
    });
  };


  }, []);

  return (
    <div className="flex w-1 select-none mix-blend-difference  items-center justify-center ">
      <div ref={cursorRef} className="cursor">
       
      </div>
      <div ref={followerRef} className="follower-cursor">
       
      </div>
    </div>
  );
};

export default CustomCursor;
