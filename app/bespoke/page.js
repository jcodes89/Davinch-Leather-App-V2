import React from 'react'
import BespokeHero from '../components/Bespoke/BespokeHero'

const bespokePage = () => {
  return (
    <>
      <main className=''>
        <span className=' xl:flex xl:left-[12.5vw] xl:w-3/4 z-10 bg-[url("../public/images/watch-center.jpg")] absolute bg-no-repeat  h-screen w-screen bg-center bg-cover '/>
        <BespokeHero/>
      </main>
    </>
  )
}

export default bespokePage