import React from 'react'
import Card from "@/components/Card"
import Link from 'next/link'

const DataSection = ({data}) => {

  return (
    <section id='data section'>
        <div className='xl:container mx-auto mt-20 px-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2  gap-7 '>
                {data.map((elt) => (
                    <Link key={elt.id} href={elt.details.cta_link} target='_blank'>
                        <Card  img={elt.details.image} title={elt.title} desc={elt.details.cta_text}/>
                    </Link>
                ))}
            </div>
        </div>
    </section >
  )
}



export default DataSection

