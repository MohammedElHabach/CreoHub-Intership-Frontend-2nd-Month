import Navbar from "../../components/Navbar"
import AboutSection from "@/components/AboutSection"
const about = () => {

    const aboutText1 = "We Foster \n Innovation , Safeguarding Your Legacy";
    const img = "/office.avif"

    const aboutText2 = "We Foster \n Innovation , Unleash Your Legacy";
    const img2 = "/office2.avif"

    const pos1 = "-right-28"; 
    const pos2 = "-right-24"; 


  return (
    <>
    <Navbar/>
    <AboutSection rightPos={pos1} img={img} text={aboutText1} span={`\nFor Future Generations`}/>
    <AboutSection rightPos={pos2} img={img2} text={aboutText2} span={`\nFor Future Generations`}/>

    </>
  )
}

export default about