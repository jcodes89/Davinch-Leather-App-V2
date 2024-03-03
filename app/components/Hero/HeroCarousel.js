'use client'
import { useState, useEffect } from 'react'
import React from 'react'
import HeroImages from './HeroImages'
import Image from 'next/image'
import Link from 'next/link'


const HeroCarousel = () => {

  
  const [currentImage, setCurrentImage] = useState(0);


  //repeating execution of current HeroImage in the array
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % HeroImages.length);
    }, 4000); // 2 seconds interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='h-screen relative w-screen'>
      {HeroImages.map((img) => 
        <span 
          key={img.id}
          className={` self-center items-center absolute inset-0 transition-opacity duration-1000  ${img.id === currentImage ? 'opacity-100' : 'opacity-0'}`}
        ><Image src={img.src} alt='image of leather products' className='h-screen w-screen object-cover'/>
        </span>
      )}
      <div className='absolute h-screen w-screen text-white text-center flex flex-col justify-center z-30 p-2'>
        <h2 className='text-5xl md:text-5xl lg:text-6xl pb-2 md:px-10'>Artisanal Mastery, Timeless Elegance</h2>
        <p className='md:text-lg font-serif lg:text-xl'>Bespoke Luxury Leather Goods</p>
        <button>
          <Link className='btn mt-4 bg-accent text-base text-gray-50 hover:bg-gray-50 hover:text-accent hover:scale-110 w-fit' href={'/bespoke'}>Learn More</Link>
        </button>
        </div>
        <div className="flex justify-center w-full pb-4 gap-2 absolute z-30 bottom-3 text-white">
          {HeroImages.map((img) => 
            <span key={img.id} href={img.src} className={`border-2 border-gray-50 h-4 w-4 rounded-box ${img.id === currentImage ? 'bg-accent focus:bg-accent' : ''}`}/>
          )}
      </div>
    </div>  
  )
}

export default HeroCarousel