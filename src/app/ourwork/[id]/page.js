"use client"
import Footer from '@/components/Footer';

import Navbar from '@/components/Navbar';
import axios from '@/utils/axios';
import { useRouter } from 'next/navigation';
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
    const router = useRouter();
    const projects= await getProjects()
    const projectDetail = projects.data.filter((elt) =>  elt.id == params.params.id)

    const arrayOfIds = projects.data.map(project => project.id);
    // console.log(arrayOfIds);



    const handleNextProject = () => {
        const currentIndex = arrayOfIds.indexOf(projectDetail[0].id);
        if (currentIndex !== -1) {
            // Calculate the next index (circular, so it wraps around)
            const nextIndex = (currentIndex + 1) % arrayOfIds.length;
          
            // Get the next ID
            const nextId = arrayOfIds[nextIndex];
          
            console.log("nextId",nextId);
            router.push((`/ourwork/${nextId}`))
          } else {
            console.error("Current ID not found in the array");
          }
    }

    const handlePrevProject = () => {
        const currentIndex = arrayOfIds.indexOf(projectDetail[0].id);
        if (currentIndex !== -1) {
            // Calculate the prev index (circular, so it wraps around)
            const prevIndex = (currentIndex - 1 + arrayOfIds.length) % arrayOfIds.length;
          
            // Get the previous ID
            const prevId = arrayOfIds[prevIndex];
          
            console.log("prevId",prevId);
            router.push((`/ourwork/${prevId}`))
          } else {
            console.error("Current ID not found in the array");
          }
    }
    

  return (
    <>
    <Navbar/>
    <section id='project-detail' >
        <div className='xl:container mx-auto  px-12 mt-10'>
            <div className=' '>
                 <img src={projectDetail[0].image} alt="project detail photo" />
            </div>

            <div className=' mt-10 sm:grid sm:grid-cols-2 sm:gap-x-10  '>
            {projectDetail[0].text && 
                <div>
                    <h2 className='text-2xl '>Description</h2>
                    <p className='pt-4 text-justify'>{projectDetail[0].text}</p>
                </div>
            }

                <div className='mt-10'>
                    <p className=' border-b py-3'>CLIENT : {projectDetail[0].client}</p>
                    <p className=' border-b py-3'>DIRECTOR : {projectDetail[0].directors}</p>
                    <p className=' border-b py-3'>DP : {projectDetail[0].cinematographer}</p>
                    <p className=' border-b py-3'>AGENCY : {projectDetail[0].agency} </p>
                </div>
            </div>
        <div className='mt-10 space-x-4 flex justify-end'>
            <button onClick={handlePrevProject}>Previous Project</button>
            <button onClick={handleNextProject}>Next Project</button>
        </div>

        </div>
    </section>
    <Footer/>
    </>
  )
}

export default ProjectDetails