import React from 'react'
import Button from './Button'

const Nav = () => {
  return (
    <div className='w-full mx-auto  px-[5.2vw]  py-4 text-white font-thin flex items-center justify-between bg-[#000000] top-0 sticky z-50'>
        <div className='flex items-center justify-center'>
            <img  src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" />
            <div className='flex text-white gap-12 ml-20 mt-0.5 '>
               {["Home", "Work", "About", "News", "Careers"].map((elem,index)=>(
                   <a className='text-m gap-0.5 flex items-center' href="">
                   {index ==1 && (<span style={{boxShadow: "0 0 0.75em #00FF19"}} className='inline-block w-[0.3vw] h-[0.3vw] rounded-full bg-[#00FF19] shadow-2xl'></span>) }
                   {elem}
                   </a>
                ))}
            </div>
        </div>
        <Button/>
    </div>
  )
}

export default Nav