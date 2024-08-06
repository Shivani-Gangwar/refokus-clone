import React from 'react'
import Button from './Button'

const Product = ({title,description,live,cases,mover , count}) => {
  return (
    <div  className='w-full h-[18rem] transition-all duration-300 ease-in-out delay-150 hover:bg-[#5355EE] text-white'>
        <div onMouseEnter={()=>{mover(count)}} className='w-[89.6%] py-10 mx-auto flex items-center justify-between '>
           <h1 className='text-5xl capitalize font-medium'>{title}</h1>
           <div className='w-1/3'>
            <p className='mb-10 text-lg w-[70%] font-normal'>{description}</p>
            <div className='flex items-center gap-5'>
               {live && <Button title = "Live Website"/>}
               {cases && <Button title = "Case Study"/>}
            </div>           
           </div>
        </div>
    </div>
  )
}

export default Product