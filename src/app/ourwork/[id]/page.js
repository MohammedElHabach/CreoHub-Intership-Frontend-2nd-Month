import axios from '@/utils/axios';
import React from 'react'

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

const ProjectDetails = async (params) => {
    const projects= await getProjects()
    const projectDetail = projects.data.filter((elt) =>  elt.id == params.params.id)
    

  return (
    <section id='project-detail' >
        <div className='xl:container mx-auto  px-12'>
            <div className=' '>
                 <img src={projectDetail[0].image} alt="project detail photo" />
            </div>

            <div className=' flex flex-col mt-20 md:grid md:grid-cols-2 md:gap-x-10  '>
                <div>
                    <h2 className='text-2xl '>Description</h2>
                    <p className='pt-4 text-justify'>{projectDetail[0].text}</p>
                </div>

                <div className='mt-10'>
                    <p className=' border-b py-3'>CLIENT : {projectDetail[0].client}</p>
                    <p className=' border-b py-3'>DIRECTOR : {projectDetail[0].directors}</p>
                    <p className=' border-b py-3'>DP : {projectDetail[0].cinematographer}</p>
                    <p className=' border-b py-3'>AGENCY : {projectDetail[0].agency} </p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProjectDetails