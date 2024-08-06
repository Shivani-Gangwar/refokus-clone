import React, { useState } from 'react'
import { motion, useMotionValueEvent } from "framer-motion"
import { useScroll } from "framer-motion"

const Work = () => {
  const [images, setImages] = useState([
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png", top:"62%", left:"50%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png", top:"67%", left:"46.5%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png", top:"54%", left:"54%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png", top:"71%", left:"50%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png", top:"64%", left:"56%", isActive:false},
    {url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png", top:"60%", left:"48%", isActive:false}
  ]  )
  const { scrollYProgress } = useScroll()

  scrollYProgress.on("change", (data)=>{
    function imagesShow(arr){
      setImages(prev =>(
        prev.map((item,index)=>
          arr.indexOf(index) == -1 ? {...item, isActive:false} : {...item, isActive:true}

        )
      ))
    }


    switch(Math.floor(data*100)){
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 2:
        imagesShow([0,1]);
        break;
      case 3:
        imagesShow([0,1,2]);
        break;   
      case 4:
        imagesShow([0,1,2,3]);
        break; 
      case 5:
        imagesShow([0,1,2,3,4]);
        break; 
      case 6:
        imagesShow([0,1,2,3,5]);
        break;   
      case 7:
        imagesShow([0,1,2,3,5,6]);
        break;   
    }
  })
  
  return (
    <div className='w-full'>
       <div className='relative w-[89.6%] mx-auto text-center mt-10'>
        <h1 className='text-[38vw] select-none leading-none font-medium  '>work</h1>
        <h2 className='text-zinc-400 text-lg font-normal mt-2 '>Web Design, Webflow Development, Creative Development</h2>
        <div className='absolute w-full h-full top-0'>
            {images.map((image, index) => (
                image.isActive && 
                 (<img className=' absolute w-72 h-72 -translate-x-[50%] -translate-y-[50%] rounded-lg' src={image.url} style={{top:image.top , left:image.left}} alt=''/>)                
            ))}
        </div>
        </div>
       
    </div>
  )
}

export default Work