import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
const page = () => {
  return (
    <>
    <Navbar/>
    <section id='contact'>
        <div className='xl:container mx-auto px-12 mt-10'>
            <div className='text-center '>
                <h1 className='text-3xl font-bold relative after:content-[""] after:absolute after:bg-pink after:h-0.5 after:-bottom-3 after:w-20 after:left-[38%] sm:after:left-[44%] md:after:left-[45%] lg:after:left-[46%] xl:after:left-[47.5%]'>Contact Us</h1> 
                <form className='space-y-10  mt-10'>
                    <input placeholder='Name' className='p-3 mx-auto block bg-slate-800 rounded-md outline-none' type="text" />
                    <input placeholder='Email' type="email" className='p-3  mx-auto block bg-slate-800 rounded-md outline-none' />
                    <textarea placeholder='Message' cols="23" className='p-3 mx-auto block bg-slate-800 rounded-md outline-none' rows="4"></textarea>
                    <button className='bg-pink block text-lg mx-auto px-7 py-2 rounded-md text-white font-semibold'>Submit</button>
                </form>
            </div>

        </div>

    </section>
    <Footer/>
    </>
  )
}

export default page