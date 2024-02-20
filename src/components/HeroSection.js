import React from 'react'

const HeroSection = () => {
  return (
    <section id='hero' >
        <div className='xl:container mx-auto mt-16 px-12 flex justify-center items-center relative'>
            <img className='' src="/bannerbg.png" alt="banner" />
            <h1 className='absolute leading-relaxed sm:leading-relaxed text-3xl sm:text-4xl md:text-5xl md:leading-relaxed   '>Here’s a teeny-weeny <br /> glimpse of our work. <br /> What’s coming later is <br /> <span className='text-pink font-bold ml-16 md:ml-28'>even </span> greater</h1>
        </div>

    </section > 
  )
}

export default HeroSection