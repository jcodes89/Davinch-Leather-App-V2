'use client'
import React from 'react'
import Image from 'next/image'
import Images from '../../components/Gallery/Images'
import ScrollDownArrow from '../Arrow/ScrollDownArrow'

const GalleryHero = () => {
  return (
    <>
    <section  className=" h-full w-full">
      <div className="h-screen flex flex-col items-center relative">
          <h2 className='text-gray-50  relative z-30 text-5xl top-1/2'>Gallery</h2> 
          <ScrollDownArrow/>
      </div>
    </section>
    <section className='h-full w-screen bg-gray-50 mt-3'>
      <div id='arrow' className=' grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
        {Images.map((img) => 
          <Image 
            key={img.id}
            className='galleryImage h-full w-full  sm:hover:border-0 '
            src={img.src}
            alt='Images of leather products'
          />
        )}
      </div>
    </section>
    </>
  )
}

export default GalleryHero