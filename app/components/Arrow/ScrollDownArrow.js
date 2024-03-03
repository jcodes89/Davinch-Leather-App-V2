'use client'
import React from 'react'

const ScrollDownArrow = () => {
  function handleClick(e){
      document.getElementById('arrow').scrollIntoView({behavior: 'smooth', block: 'nearest'})
  } 

  return (
    <div className="z-20 absolute bottom-10 landscape:bottom-2">
        <button className="relative" onClick={handleClick}>
          <i className="fa-solid fa-arrow-down text-gray-50 scale-[2.5]  hover:scale-[3] hover:text-accent "></i>
        </button>
    </div>
  )
}

export default ScrollDownArrow