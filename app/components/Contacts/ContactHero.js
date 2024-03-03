
import React from 'react'
import ContactForm from './ContactForm'
import ScrollDownArrow from '../Arrow/ScrollDownArrow'

const ContactHero = () => {
  return (
    <>
    <section className=" h-full w-full">
      <div className="h-screen flex flex-col items-center relative">
          <h2 className='text-gray-50  relative z-30 text-5xl top-1/2'>Contact</h2>
          <ScrollDownArrow/>
      </div>
    </section>
    <section id='arrow' className='h-full w-full flex p-3 justify-center align-middle'>
        <ContactForm/>
    </section>
    </>
  )
}

export default ContactHero
