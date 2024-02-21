import React from 'react'
import Card from "@/components/Card"

const DataSection = ({data}) => {
    // const Data = [
    //     {
    //         img:"/pepsi.jpg",
    //         title:"Fizz the World",
    //         description:"Pepsi's Expo 2024"
    //     },
    //     {
    //         img:"/pepsi.jpg",
    //         title:"Fizz the World",
    //         description:"Pepsi's Expo 2024.Lorem ipsum dolor sit amet consectetur adipisicing elit. "
    //      },
    //      {
    //         img:"/pepsi.jpg",
    //         title:"Fizz the World",
    //         description:"Pepsi's Expo 2024.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat tenetur commodi sed, sunt omnis "
    //      },
    //      {
    //         img:"/pepsi.jpg",
    //         title:"Fizz the World",
    //         description:"Pepsi's Expo 2024.Lorem ipsum dolor sit amet consectetur adipisicing elit.Quaerat tenetur commodi sed, sunt omnis,adipisicing elit.Quaerat tenetur commodi sed, sunt omnis "
    //      },
    // ]
  return (
    <section id='data section'>
        <div className='xl:container mx-auto mt-20 px-12'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-center gap-7 '>
                {data.map((elt) => (
                    <Card key={elt.id} img={elt.details.image} title={elt.title} desc={elt.subtitle}/>
                ))}
            </div>
        </div>
    </section >
  )
}



export default DataSection

