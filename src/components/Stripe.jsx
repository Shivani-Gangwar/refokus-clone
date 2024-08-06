import { motion } from 'framer-motion'
import React from 'react'


const Stripe = ({image , number}) => {
  
  return (
    <motion.div initial={{x:"0" }} animate={{x:"-100%"}} transition={{ease:"linear", duration:10, repeat:Infinity}} className='w-[16.66%] px-6 py-6 flex items-center justify-between border-zinc-100 border-t-[1px] border-b-[2px] border-r-[1px] white-space-nowrap flex-shrink-0'>
        <img src={image} alt="" />
        <h1 className='text-white text-lg'>{number}</h1>
    </motion.div>
  )
}

export default Stripe