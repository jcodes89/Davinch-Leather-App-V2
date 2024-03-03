import Link from 'next/link'
import React from 'react'

const Social = () => {
  return (
    <div className='hidden absolute left-3 md:flex flex-row self-center pl-3 z-40 '>
        <Link className='' href='https://www.instagram.com/davinchleatherco/'><i className="  mx-2 fa-brands fa-square-instagram hover:text-accent hover:scale-[1.75] scale-150"></i></Link>
        <Link className='' href='https://www.facebook.com/davinchleatherco/'><i className="  mx-2 fa-brands fa-square-facebook hover:text-accent hover:scale-[1.75] scale-150"></i></Link>
    </div>
  )
}

export default Social