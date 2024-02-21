import Link from 'next/link'
import React from 'react'

const CardSwiper = ({img,title,desc}) => {
  return (
    <div className="space-y-3 ">
      <img className="min-h-[500px] object-cover" src={img} alt="image" />
      <h2 className="text-2xl">{title}</h2>
      <p className=''>{desc}</p>
      <Link className='relative  after:content-[""] after:absolute after:bg-blue-700 after:h-0.5 after:left-0 after:-bottom-2 after:w-0 after:transition-all after:duration-300 hover:after:w-full' href="/">Know more</Link>
    </div>
  )
}

export default CardSwiper