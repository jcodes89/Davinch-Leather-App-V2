import React from 'react'
import Image from 'next/image'

const Process = (props) => {
  return (
    <div className=' text-gray-950 p-2'>
          <h4 className={`border-b-black border-b-2 font-bold lg:text-xl`} >
            {props.heading}
          </h4>
          <p className='text-left mt-2 p-2 mb-1 lg:text-lg'>
            {props.paragraph}
          </p>
        <div>
          <Image className='h-full w-full mb-2' src={props.src} alt={props.alt} />
        </div>
        </div>
        
  )
}

export default Process