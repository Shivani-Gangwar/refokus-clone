import React from 'react'
import { IoIosReturnRight } from "react-icons/io";

const Button = ({title = "Start a Project"}) => {
  return (
    <div className='flex justify-between gap-2 items-center rounded-full bg-white text-zinc-700 px-5 py-1.5 mr-6'>
        <span className='text-base font-normal'>{title}</span>
        <IoIosReturnRight />
    </div>
  )
}

export default Button