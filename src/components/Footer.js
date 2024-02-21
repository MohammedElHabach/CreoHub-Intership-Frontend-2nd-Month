import Link from 'next/link'
import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const Footer = () => {
  return (
    <footer className='bg-pink '>
        <div className='xl:container mx-auto mt-16 px-12 py-14'>
            <div className='flex justify-between  flex-wrap gap-10  '>
                <div className='flex gap-x-20 md:gap-x-32'>
                    <div>
                        <h3 className='text-2xl text-center font-light'>sitemap</h3>
                        <div className='flex items-center flex-col space-y-1 mt-4'>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>about us</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>our work</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>our clients</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>our team</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>contact us</Link>
                        </div>
                    </div>
                    <div>
                        <h3 className='text-2xl text-center font-light'>offices</h3>
                        <div className='flex items-center flex-col space-y-1 mt-4'>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>dubai,UAE</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>beirut,Lebanon</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>beirut,Lebanon</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>beirut,Lebanon</Link>
                            <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>beirut,Lebanon</Link>
                        </div>
                    </div>
                </div>


                <div>
                    <h3 className='text-2xl font-light'>inquiries</h3>
                    <p className='mt-4'>briefme@mindspace.com</p>
                </div>
            </div>

            <div className='flex flex-wrap justify-between items-center gap-y-7 mt-10'>
                <div className='flex gap-x-7 items-center space-x-3'>
                    <Link href="/">
                        <h1 className='text-3xl font-bold'>mindspace</h1>
                    </Link>
                    <span className='hidden md:block'>|</span>
                    <div className='space-x-4'>

                    <Link href="/"><InstagramIcon sx={{fontSize:"2rem"}}/></Link>
                    <Link href="/"><LinkedInIcon sx={{fontSize:"2rem"}}/></Link>
                    </div>
                </div>

                <div className='flex items-center space-x-3'>
                    <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>privacy policy  </Link>
                    <span className='hidden md:block'>|</span>
                    <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-1 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>terms & conditions</Link>
                </div>
                
            </div>

        </div>

    </footer>
  )
}

export default Footer