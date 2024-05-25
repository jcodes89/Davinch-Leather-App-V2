
import Link from 'next/link'

const Footer = () => {
  
  return (
    <>
      <footer className=' border-t-[1px] border-secondary bg-gray-50 p-2 '>
        <div className='text-center m-3 mb-0 text-lg font-medium'>
          <p>&copy; Davinch Leather Co.</p>
          <p className='text-sm'>Tampa, FL</p>
        </div>
        <div className='md:hidden flex flex-row justify-center w-full left-3 py-1'>
          <Link className='' aria-label='Instagram profile link' href='https://www.instagram.com/davinchleatherco/'><i className="aria-label='Instagram profile link' mx-3 fa-brands fa-square-instagram text-secondary scale-150 hover:text-accent hover:scale-[2]"></i></Link>
          <Link className='' aria-label='Facebook profile link' href='https://www.facebook.com/davinchleatherco/'><i className="aria-label='Facebook profile link' mx-3 fa-brands fa-square-facebook text-secondary scale-150 hover:text-accent hover:scale-[2]"></i></Link>
        </div>
      </footer>
    </>
  )
}

export default Footer