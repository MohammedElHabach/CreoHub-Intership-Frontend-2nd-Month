"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOpenMenu = () => {
        const btn = document.getElementById('menu-btn')
        const nav = document.getElementById('menu')
        // btn.classList.toggle("open")
        nav.classList.toggle("flex")
        nav.classList.toggle("hidden")
        setIsMenuOpen(!isMenuOpen);

      }
  return (
    <nav>
        <div className ={` xl:container ${isMenuOpen ? '' : 'border-blue-700 border-b-2'}  md:border-none relative px-5 md:mx-auto md:px-12 py-5 `}>
            <div className='flex justify-between items-center'>
                <div>
                    <Link href="/">
                        <img className='w-16 md:w-28' src="/logo.png" alt="logo" />
                    </Link>
                </div>

                <div className='hidden md:flex space-x-4'>
                    <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-2 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>about us</Link>
                    <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-2 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>our work</Link>
                    <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-2 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>our clients</Link>
                    <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-2 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>our team</Link>
                    <Link href="/" className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-2 after:w-0 after:transition-all after:duration-300 hover:after:w-full '>contact us</Link>
                </div>

                <button onClick={handleOpenMenu} id="menu-btn" className="block hamburger  md:hidden focus:outline-none">
                    <span  className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                 </button>



            </div>

            <div className="md:hidden">
                <div id="menu" className="hidden absolute w-full left-0 bg-red-500 z-10   flex-col items-center pb-48 space-y-10 pt-4 font-bold   ">
                    <Link onClick={handleOpenMenu}  href="/">about us</Link>
                    <Link onClick={handleOpenMenu}   href="/">our work</Link>
                    <Link onClick={handleOpenMenu}  href="/">our clients</Link>
                    <Link onClick={handleOpenMenu} href="/">our team</Link>
                    <Link onClick={handleOpenMenu} href="/">contact us</Link>
                </div>
            </div>

        </div>
        
    </nav>
  )
}

export default Navbar