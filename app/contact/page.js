import React from 'react';
import ContactHero from '../components/Contacts/ContactHero'

const contactPage = () => {
  return (
    <>
      <main className='h-full w-screen '>
        <span className='xl:flex xl:left-[12.5vw] xl:w-3/4 z-10 bg-[url("../public/images/telephone.webp")] absolute bg-repeat h-screen w-screen bg-cover bg-center '/>
        <div className='w-full h-full  justify-center align-middle'>
          <ContactHero/>
        </div>
      </main>
    </>
  )
}

export default contactPage