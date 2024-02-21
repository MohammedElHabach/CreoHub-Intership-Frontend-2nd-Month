import React from "react";

const Card = ({img,title,desc}) => {
  return (
    <div className="space-y-3 ">
      <img className="sm:h-[500px] object-cover" src={img} alt="image" />
      <h2 className="text-2xl">{title}</h2>
      <p>{desc}</p>
    </div>
  );
};

export default Card;
