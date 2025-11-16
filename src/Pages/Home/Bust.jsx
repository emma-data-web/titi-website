import React from 'react'
import Phone from "../../assets/phone.png"
import Woman3 from "../../assets/woman3.png"
import Computer from "../../assets/computer.png"

const Bust = () => {
  return (
    <div className='pt-20'>
      <h1 className='text-center text-9xl text-[#2e2c2b]'>BUST A MOVE</h1>

      <div className='flex items-center gap-10 justify-center mx-auto -translate-y-10'>

        {/* LEFT */}
        <div className='text-center w-[25%]'>
          <img 
            src={Phone} 
            className='h-[25rem] w-full object-cover' 
          />
          <p className='text-[#d84136] pt-10 text-4xl leading-tight'>
            ACCESS THE FACEBOOK COMMUNITY
          </p>
        </div>

        {/* MIDDLE (same image size, fixed text width) */}
        <div className='text-center w-[25%]'>
          <img 
            src={Woman3} 
            className='object-cover' 
          />
          <p className='text-[#d84136] pt-10 text-4xl leading-tight'>
            CHECK OUT THE YOUTUBE CHANNEL
          </p>
        </div>

        {/* RIGHT */}
        <div className='text-center w-[25%]'>
          <img 
            src={Computer} 
            className='h-[25rem] w-full object-cover' 
          />
          <p className='text-[#d84136] pt-10 text-4xl leading-tight'>
            JOIN THE SHE SPEAKS FIRE NEWSLETTER
          </p>
        </div>

      </div>
    </div>
  )
}

export default Bust
