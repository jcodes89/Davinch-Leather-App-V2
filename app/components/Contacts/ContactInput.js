import React from 'react'

const ContactInput = (props) => {
  return (
    <input
        className='p-2 m-2 border-2 border-secondary rounded-md outline-none  after:bg-white focus:bg-primary selection:bg-accent focus:text-gray-50'
        type={props.type}
        required
        placeholder={props.placeholder}
        name={props.name}
    />
  )
}

export default ContactInput