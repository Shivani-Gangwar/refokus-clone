import React from 'react'
import { IoIosArrowRoundForward } from "react-icons/io";

const Card = ({width , start , para , heading1, heading2 , Hover }) => {
  return (
    <div className={`bg-zinc-800 rounded-xl p-5 ${width} flex flex-col justify-between h-[60vh] ${Hover && `hover:bg-[#7443FF]`}`}>
      <div className='w-full'>
          <div className='flex items-center justify-between w-full' >
            <h3>{heading1}</h3>
            < IoIosArrowRoundForward/>
          </div>
          <h1 className='w-[18vw] font-medium text-3xl mt-5'>{heading2}</h1>
      </div>   
      <div className='mt-32 w-full'>
        {start && (
          <>
            <h2 className='text-8xl leading-none font-semibold '>Start a Project</h2>
            <button className='rounded-full text-white px-6 py-2.5 border-[1px] font-normal mt-5 border-zinc-50'>Contact Us</button>
          </>
           
        )}

        {para && (  
          <p className='text-zinc-400 font-normal text-sm'>Explore what drives our team.</p>
        )}
      </div>
    </div>
  )
}

export default Card