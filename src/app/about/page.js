import Navbar from "../../components/Navbar";
import AboutSection from "@/components/AboutSection";
const about = () => {
  return (
    <>
      <Navbar />
      <AboutSection
        rightPos={"right-32"}
        img={"/office.avif"}
        text={"We Foster \n Innovation , Safeguarding Your Legacy"}
        span={`\nFor Future Generations`}
      />
      <AboutSection
        leftPos={"left-40"}
        img={"/office2.avif"}
        text={"We Foster \n Innovation , Unleash Your Legacy"}
        span={`\nFor Future Generations`}
      />
    </>
  );
};

export default about;
