import React from 'react'

const AboutSection = ({text,span,img,rightPos,leftPos}) => {


  return (
    <section id='about'>
        <div className='xl:container mx-auto  px-12 mt-10 '>
            <div className={`flex flex-col-reverse   ${rightPos ? 'md:flex-row':'md:flex-row-reverse'}   items-center relative`}>
                <img className='w-[920px] h-[500px] pt-4 md:pt-0' src={img} alt="image" />
                <h1 className={`text-2xl whitespace-pre-line md:absolute  ${rightPos} ${leftPos}  `}>{text}<span className='text-red-500'>{span}</span></h1>
            </div>
        </div>

    </section>
  )
}

export default AboutSection