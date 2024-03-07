"use client"
import gsap from "gsap";
import React, { useEffect, useRef } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  const moveCursor = (e) => {
    gsap.to(cursorRef.current,{
        x:e.clientX,
        y:e.clientY
    })
    gsap.to(followerRef.current,{
        x:e.clientX,
        y:e.clientY
    })

  }

  useEffect(() => {
    gsap.set(cursorRef,{ 
        xPercent: 100,
        yPercent: 100 ,
        duration:.2
    });

    gsap.set(followerRef, {
      xPercent: -20,
      yPercent: -20,
      duration:.5

    });
    window.addEventListener("mousemove",moveCursor)
  }, []);

  return (
    <>
      <div ref={cursorRef} className="cursor">
       
      </div>
      <div ref={followerRef} className="follower-cursor">
       
      </div>
    </>
  );
};

export default CustomCursor;
