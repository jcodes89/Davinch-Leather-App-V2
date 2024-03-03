import React from 'react'
import AboutHero from '../components/About/AboutHero'

const aboutPage = () => {
  return (
    <>
    <main className='h-full w-screen'>
        <span className=' xl:flex xl:left-[12.5vw] xl:w-3/4 z-10 bg-[url("../public/images/skiving.jpg")] absolute bg-no-repeat h-screen w-screen bg-cover bg-center'/>
        <AboutHero/>
    </main>
    </>
  )
}

export default aboutPage
