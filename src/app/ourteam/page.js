"use client"
import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "@/components/Footer";
import useAnimation from '@/components/useAnimation'
import TeamMember from "@/components/TeamMember"
const ourTeam = () => {
    useAnimation('contactusElement')
  return (
    <>
      <Navbar />
      <section className="mb-32 ">
        <div className="xl:container mx-auto px-12 mt-10">
          <div className="grid grid-cols-1 gap-x-10 gap-y-32 lg:gap-y-40  sm:grid-cols-4">
                <TeamMember borderColor={"pink"} bgColor={"pink"}/>
                <TeamMember borderColor={"pink"} bgColor={"pink"}/>
                <TeamMember borderColor={"blue-500"} bgColor={"blue-500"}/>
                <TeamMember borderColor={"pink"} bgColor={"pink"}/>
                <TeamMember borderColor={"blue-500"} bgColor={"blue-500"}/>
                <TeamMember borderColor={"blue-500"} bgColor={"blue-500"}/>
                <TeamMember borderColor={"pink"} bgColor={"pink"}/>
                <TeamMember borderColor={"pink"} bgColor={"pink"}/>   
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default ourTeam;
