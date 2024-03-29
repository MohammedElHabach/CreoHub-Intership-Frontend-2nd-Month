import Footer from "@/components/Footer";
import Navbar from "../../components/Navbar"
import MySwiper from '../../components/Swiper';
import axios from '@/utils/axios';


const getProjects = async () => {

  try {
    const response = await axios.get("/projects", {
      headers: {
        "Accept-Language": "en", 
      },
    });
    return response.data;
  } catch (err) {
    console.error(err);
  }
};

const page = async () => {


  const projects= await getProjects()
  // console.log("projects",projects); 
 
  return ( 
    <>
        <Navbar/>
        <div className='xl:container mx-auto mt-16 '>
            <h2 className='text-3xl font-bold text-center'>Our Work</h2>

            <div className=' pt-5 px-5  container mx-auto'>  
                 <MySwiper projects={projects.data} ></MySwiper>  
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default page