"use client"
import gsap, {  Sine } from "gsap";
import React, { useEffect } from "react";

const Card = ({img,title,desc}) => {

  useEffect(()=>{
    gsap.fromTo("#card", { opacity: 0 }, { opacity: 1, duration: 2.5, y:-40,ease:Sine.out});
  },[])
  
  return (
    <div  id="card" className="space-y-3">
      <img className="sm:h-[500px] object-cover" src={img} alt="image" />
      <h2 className="text-2xl">{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
