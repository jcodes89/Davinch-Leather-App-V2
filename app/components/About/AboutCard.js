'use client'
import React from 'react'

const AboutCard = (props) => {
  return (
    <>
      <div className=' text-gray-950'>
        <h3 className='underline text-lg lg:text-xl pb-1'>{props.heading}</h3>
        <p className='pb-3 lg:pb-5 '>{props.paragraph}</p>
      </div>
    </>
  )
}

export default AboutCard