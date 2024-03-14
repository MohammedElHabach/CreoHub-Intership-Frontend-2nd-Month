"use client";
import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar";
import AboutVideo from "@/components/AboutVideo";
import AboutSection from "@/components/AboutSection";
import AccordionCustomIcon from "@/components/Accordion";
import { useParams } from "next/navigation";
const about = () => {
  

  return (
    <>
      <Navbar />
      <AboutSection
        rightPos={"right-32"}
        img={"/office.avif"}
        text={"We Foster \n Innovation , Safeguarding Your Legacy"}
        span={`\nFor Future Generations`}
        sectionId="firstSec"
      />

      <AboutSection
        leftPos={"left-40"}
        img={"/office2.avif"}
        text={"We Foster \n Innovation , Unleash Your Legacy"}
        span={`\nFor Future Generations`}
        sectionId="secondSec"
      />

      <AboutVideo />

      <Footer />
    </>
  );
};

export default about;
