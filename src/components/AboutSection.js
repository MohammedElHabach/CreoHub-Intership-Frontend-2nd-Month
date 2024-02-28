import React from 'react'

const AboutSection = ({text,span,img,rightPos}) => {


  return (
    <section id='about'>
        <div className='xl:container mx-auto  px-12 mt-10 '>
            <div className='flex   items-center relative'>
                <img className='w-3/4' src={img} alt="image" />
                <h1 className={`text-3xl whitespace-pre-line absolute ${rightPos}  `}>{text}<span className='text-red-500'>{span}</span></h1>
            </div>
        </div>

    </section>
  )
}

export default AboutSection