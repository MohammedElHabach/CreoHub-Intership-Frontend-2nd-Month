import React from 'react'

const AboutSection = ({text,span,img,rightPos,leftPos}) => {


  return (
    <section id='about'>
        <div className='xl:container mx-auto  px-12 mt-10 '>
            <div className={`flex ${rightPos ? '':'flex-row-reverse'}   items-center relative`}>
                <img className='w-[800px]' src={img} alt="image" />
                <h1 className={`text-xl sm:text-3xl whitespace-pre-line absolute ${rightPos} ${leftPos}  `}>{text}<span className='text-red-500'>{span}</span></h1>
            </div>
        </div>

    </section>
  )
}

export default AboutSection