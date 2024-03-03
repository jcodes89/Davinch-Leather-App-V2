import React from 'react'
import Image from 'next/image'

const HeroList = (props) => {
  return (
    <>
      <div className='m-3 mt-0 pt-0 p-2 bg-gray-50  rounded-md h-fit w-full  my-2 flex flex-col items-center'>
          <h2 className='text-xl lg:text-2xl py-2 md:text-2xl'>{props.heading}</h2>
          <Image
            className='p-2 md:h-[20rem] md:w-[24rem] lg:h-[22rem] lg:w-[28rem]'
            src={props.src}
            alt={props.alt}
          />
          <p className='text-md p-2 md:p-3 md:w-3/4 lg:text-lg lg:py-4'>{props.paragraph}</p>
      </div>
    </>
  )
}

export default HeroList