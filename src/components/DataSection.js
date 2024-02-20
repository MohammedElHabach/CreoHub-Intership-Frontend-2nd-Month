import React from 'react'
import Card from "@/components/Card"
const DataSection = () => {
    const Data = [
        {
            img:"/pepsi.jpg",
            title:"Fizz the World",
            description:"Pepsi's Expo 2024"
        },
        {
            img:"/pepsi.jpg",
            title:"Fizz the World",
            description:"Pepsi's Expo 2024.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
         },
         {
            img:"/pepsi.jpg",
            title:"Fizz the World",
            description:"Pepsi's Expo 2024.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat tenetur commodi sed, sunt omnis "
         },
         {
            img:"/pepsi.jpg",
            title:"Fizz the World",
            description:"Pepsi's Expo 2024.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat tenetur commodi sed, sunt omnis,adipisicing elit.Quaerat tenetur commodi sed, sunt omnis "
         },
    ]
  return (
    <section id='data section'>
        <div className='xl:container mx-auto mt-20 px-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-7 '>
                {Data.map((elt,index) => (
                    <Card key={index} img={elt.img} title={elt.title} desc={elt.description}/>
                ))}
            </div>
        </div>
    </section >
  )
}

export default DataSection