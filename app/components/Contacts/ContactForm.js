
import React from 'react'
import ContactInput from './ContactInput'

const ContactForm = () => {
  return (
    <>
        <form method='POST' data-netlify='true' className='flex flex-col p-3 px-0 mx-3 md:px-3 lg:w-2/4  rounded-md ' name='davinch'>
            <input type='hidden' name='form-name' value='davinch'/>
            <h2 className='text-center py-4 font-semibold text-2xl  '>
               Contact Davinch
            </h2>
            <p className='text-md text-gray-600 m-2'>
               Please feel free to reach out with any questions or concerns. We are happy to help.  Please be as detailed as possible and we will be in touch shortly
            </p>
            <ContactInput
                type='text'
                placeholder='First Name'
                name='first'
            />
            <ContactInput
                type='text'
                placeholder='Last Name'
                name='last'
            />
            <ContactInput
                type='number'
                placeholder='Phone Number'
                name='number'
            />
            <ContactInput
                type='email'
                placeholder='Email'
                name='email'
            />
            <textarea
                required
                className='p-2 m-2 mb-1 rounded-m outline-none border-2 border-secondary resize-y rounded-md focus:bg-primary selection:bg-accent focus:text-gray-50'
                name='text'
                placeholder='Please describe in detail the leather item you would like to have made.'
                rows={10}
            />
            <button className='btn w-fit self-center m-4 bg-gray-50' type='submit'>
                Submit
            </button>
        </form>
    </>
  )
}

export default ContactForm