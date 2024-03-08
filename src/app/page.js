// "use client"
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DataSection from "@/components/DataSection";
import Footer from "@/components/Footer";
import axios from "@/utils/axios";
import CustomCursor from "@/components/CustomCursor"
export default async function Home() {
  
  const data = await getData()
  // console.log(data.props.data.data.sections);
  
    return (
    <>
      <Navbar />
      <HeroSection/>
      <DataSection data={data.props.data.data.sections}/>
      <Footer/>
    </>
  );
}

async function getData() {
  let data;
  await axios
    .get("/page/news", {
      headers: {
        "Accept-Language": "en", 
      },
    })
    .then((res) => {
      data = res.data;
    })
    .catch(console.error);


  return { props: { data } };
}

