import React from 'react'

const Footer = () => {
  return (
    <div className='w-[91.4%] mx-auto p-4 -mt-12 flex items-center justify-between'>
        <div className='flex gap-8 text-zinc-500 font-normal text-sm'>
            <button>Privacy Policy</button>
            <button>Cookie Policy</button>
            <button>Impressum</button>
            <button>Terms</button>
            <button>Webflow Agency</button>
        </div>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" />     
    </div>
  )
}

export default Footer