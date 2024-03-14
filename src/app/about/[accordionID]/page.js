"use client";
import AccordionCustomIcon from "@/components/Accordion";
import Navbar from "@/components/Navbar";
import React from "react";

const page = ({ params }) => {
  return (
    <>
      <Navbar />
      <section className="xl:container mx-auto px-12 mt-10">
        <AccordionCustomIcon activeId={parseInt(params.accordionID, 10)} />
      </section>
    </>
  );
};

export default page;
