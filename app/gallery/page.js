import React from 'react'
import GalleryHero from '../components/Gallery/GalleryHero'


const galleryPage = () => {
  return (
    <>
      <main className='h-full w-screen '>
        <span className='xl:flex xl:left-[12.5vw] z-10 bg-[url("../public/images/ostrich-watchstrap.jpg")] xl:w-3/4 absolute bg-repeat h-screen w-screen bg-cover bg-center'/>
        <GalleryHero/>
      </main>
    </>
  )
}

export default galleryPage

