import React, { useState } from 'react'

const OurClientImage = () => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
      };
    
      const handleMouseLeave = () => {
        setIsHovered(false);
      };

  return (
    <div className='my-10 pb-16'>
        <div className='flex items-center relative'>
            <img onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}  src="/dubai.jpg" className=' grayscale transition-all duration-500 hover:grayscale-0' alt="dubai photo" />
            <h1 className={` ${isHovered ? 'opacity-0 duration-300  transition-all ':'opacity-100 duration-300  transition-all'}  absolute text-sm  right-40 text-center sm:text-2xl `}>yes, its a melting pot <br/> no, we're not looking to blend in <br /> let's connect  so we stand out together</h1>
            <div className={` ${isHovered ? 'opacity-100 duration-300  transition-all ':'opacity-0'}  absolute right-30 lg:right-72  top-30  lg:top-80 text-center space-y-4`}>
                <h1 className='text-2xl lg:text-7xl font-bold'>dubai</h1>
                <p className=' text-lg lg:text-2xl'>liwa heights <br /> office 3045, cluster ce <br />JLT,dubai,UAE</p>
                <h2 className='lg:text-2xl font-bold'>+971 6 969 887 <br /> HelloDubai@mindspace.com</h2>
            </div>
        </div>

    </div>
  )
}

export default OurClientImage