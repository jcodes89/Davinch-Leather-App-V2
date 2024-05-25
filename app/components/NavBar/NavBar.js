'use client'
import React, { useState, useEffect} from 'react'
import Link from 'next/link'
import SocialMedia from '../SocialMedia/Social'



const NavBar = () => {

  //change nav when scrolling
  const [color, setColor] = useState(false);

  useEffect(() => {
    const changeColor = () => {
      if(window.scrollY >= 950) {
        setColor(true)
      } else {
        setColor(false)
      }
      console.log('scroll');
    }
  
    window.addEventListener('scroll', changeColor)

  }, [])

  return (
    
        <nav  className={color ?  `navBar flex text-gray-950 fixed  z-40 pt-2 bg-gray-50  lg:text-gray-950 hover:bg-gray-50 hover:text-gray-950` : ` navBar flex text-white fixed  z-40 lg:border-b-accent lg:bg-gray-50  lg:text-gray-950 hover:bg-gray-50 hover:text-gray-950`}>
          <SocialMedia/>
          <div className='flex w-screen justify-center'>
            <div className='text-center '>
                <Link className=' cursor-pointer z-20' aria-label='link to home' href={'/'}>
                    <h2 className=' font-medium text-2xl'><span className='text-accent text-4xl'>D</span>avinch Leather Co</h2>
                    <p className='text-[.6rem] md:text-[.7rem] font-extralight font-serif' >Est 2016</p>
                </Link>
            </div>
          </div>
          <div className="hidden lg:grid self-center absolute w-screen place-content-end right-[8rem]">
              <ul  className="flex flex-row justify-evenly z-40  p-0 h-full  w-52">
                <li className='hover:text-accent  px-2 rounded-badge'><Link aria-label='Home page' href={'/'}>Home</Link></li>
                <li className='hover:text-accent  px-2 rounded-badge'><Link aria-label='Bespoke page for custom work' href={'/bespoke'}>Bespoke</Link></li>
                <li className='hover:text-accent  px-2 rounded-badge'><Link aria-label='Gallery Page' href={'/gallery'}>Gallery</Link></li> 
                <li className='hover:text-accent  px-2 rounded-badge'><Link aria-label='Contact Page' href={'/contact'}>Contact</Link></li> 
                <li className='hover:text-accent  px-2 rounded-badge'><Link aria-label='About page' href={'/about'}>About</Link></li> 
              </ul>
            </div>
            {/*Dropdown menu on mobile version */}
            <div className="lg:hidden grid absolute w-full place-content-end right-[1rem] md:right-[2rem] dropdown dropdown-bottom dropdown-end">
              <div tabIndex={0} aria-label='menu button for navigation links' role="button" className=" mt-2">
                <i className="fa-solid fa-bars scale-125">
                  
                </i></div>
                <ul tabIndex={0} className=" mt-[1.4rem] dropdown-content z-40 menu shadow-md shadow-secondary p-0 bg-base-100 rounded-bl-box rounded-br-box w-52 text-gray-950">
                  <li className='hover:bg-accent hover:text-gray-50'><Link aria-label='Home page' href={'/'}>Home</Link></li>
                  <li className='hover:bg-accent hover:text-gray-50'><Link aria-label='Bespoke page' href={'/bespoke'}>Bespoke</Link></li>
                  <li className='hover:bg-accent hover:text-gray-50'><Link aria-label='Gallery page' href={'/gallery'}>Gallery</Link></li> 
                  <li className='hover:bg-accent hover:text-gray-50'><Link aria-label='Contact page' href={'/contact'}>Contact</Link></li> 
                  <li className='hover:bg-accent hover:text-gray-50 hover:rounded-bl-box hover:rounded-br-box outline-none'><Link aria-label='About page' href={'/about'}>About</Link></li> 
                </ul>
            </div>
        </nav>

      
  )
}

export default NavBar