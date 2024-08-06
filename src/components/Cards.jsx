import React from 'react'
import Card from './Card'

const Cards = () => {
  
  return (
    <div className='w-full mt-40 -mb-18'>
       <div className='w-[89.6%] mx-auto py-20 gap-1 flex'>
         <Card width={"basis-1/3"} start={false} para={true}  heading1={"Up Next:News"} heading2={"Insights and behind the scenes"}/>
         <Card width={"basis-2/3"} start={true} para={false}  heading1={"Get in Touch"} heading2={"Let's get to it, together."} Hover={true} />
       </div>
    </div>
  )
}

export default Cards