import { motion } from 'framer-motion'
import React from 'react'


function Marquee({value, direction}) {
  return (
    <div className='py-4 mb-4 overflow-hidden '>
        <motion.div initial={{x: direction==='left' ? "0" :"-100%"}} animate={{x:direction==='left' ? "-100%":"0"}} transition={{ease:"linear", duration:15, repeat:Infinity}} className='flex white-space-nowrap gap-[9vw]'>
            {value.map((img,index)=>(<img key={index} className='w-24 flex-shrink-0' src={img.URL} alt="" />))}
        </motion.div>
    </div>
  )
}

export default Marquee