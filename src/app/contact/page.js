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
                <h1 className='text-3xl font-bold border-b-2 border-pink pb-3 mx-[70px] sm:mx-[190px] md:mx-[250px] lg:mx-[380px] xl:mx-[500px] 2xl:mx-[620px]'>Contact Us</h1> 
                <form className='space-y-10 text-black mt-10'>
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