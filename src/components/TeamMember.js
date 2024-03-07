import React from "react";

const TeamMember = ({borderColor,bgColor}) => {
  return (
    <div className="relative flex flex-col items-center ">
      <div className={`border-2 ${borderColor} rounded-[50%] w-3/4 p-3 `}>
        <img src="/rp1.png" alt="image" className=" mx-auto rounded-full " />
      </div>

      <div className="flex flex-col items-center">
        <div className={`h-[130px] w-[2px] ${bgColor} lineAnimation `}> </div>

        <div className=" teamInfo absolute left-40 sm:left-20  md:left-28 lg:left-32 xl:left-40 2xl:left-48 text-sm md:text-base lg:text-lg">
          <p>amr al aseel</p>
          <p className="font-bold lg:whitespace-nowrap">Senior Accountant</p>
        </div>

        <div className={` ${bgColor} w-[20px] h-[20px] rounded-[50%] ballAnimation `}></div>
      </div>
    </div>
  );
};

export default TeamMember;
