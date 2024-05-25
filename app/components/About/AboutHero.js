import React from 'react'
import Link from 'next/link'
import ScrollDownArrow from '../Arrow/ScrollDownArrow'
import Image from 'next/image'
import img from '../../../public/images/Untitled-1.webp'
import AboutCard from './AboutCard'

const AboutHero = () => {
  return (
    <>
      <section className=" h-full w-screen relative">
        <div className="h-screen flex flex-col items-center relative">
            <h2 className='text-gray-50  relative z-30 text-5xl top-1/2'>About</h2>
        <ScrollDownArrow/>
        </div>
      </section>
      <section className='h-full w-screen relative'>
        <div id='arrow' className='p-4 h-full flex flex-col items-center'>
          <h2 className='text-center p-2 mb-2 text-lg underline lg:text-xl'>Crafting Timeless Elegance in Leather</h2>
          <Image
            alt='Image of Davinch Leather artisan and his wife'
            className='px-2 lg:w-2/3 '
            src={img}
          />
          <div className='p-5 lg:w-2/3'>
              <p className=' lg:pb-3 lg:text-lg my-4 '>
                Welcome to Davinch Leather Co, a sanctuary of craftsmanship where passion and precision converge to create exceptional leather goods. With a wealth of experience spanning eight years, Jeremy Sluder has masterfully honed his skills, transforming leather into timeless pieces of art. 
              </p>
              <div className='xl:grid xl:grid-cols-2 '>
                <AboutCard
                  heading='Our Craftsmanship:'
                  paragraph='Every item crafted at Davinch Leather reflects a journey marked by dedication and expertise. We pride ourselves on our commitment to traditional craftsmanship, with each stitch meticulously placed by hand. The human touch brings a unique character to our leather goods, ensuring unparalleled quality and attention to detail.'
                />
                <AboutCard
                  heading='A Legacy of Custom Projects:'
                  paragraph={`Throughout the years, Jeremy Sluder has woven his expertise into a tapestry of custom projects. From bespoke wallets to handcrafted bags, each creation is a testament to the artisan's ability to bring individual visions to life. Our bespoke services allow clients to be an integral part of the creative process, resulting in personalized pieces that tell their own stories.`}
                />
                <AboutCard
                  heading='Influences from Japan and Europe:'
                  paragraph='Jeremy draws inspiration from the rich traditions of Japanese and European leather artistry. The meticulousness of Japanese craftsmanship and the timeless elegance of European design converge in our creations. This fusion of influences infuses our leather goods with a harmonious blend of precision, simplicity, and sophistication.'
                />
                <AboutCard
                  heading='Our Philosophy:'
                  paragraph='At Davinch Leather Co, we believe in crafting more than just leather goods; we craft experiences. Each piece is a labor of love, a symphony of creativity, and a dedication to preserving the art of hand-stitched leatherwork. Our philosophy revolves around the pursuit of perfection and the belief that true luxury lies in the meticulous craftsmanship that stands the test of time.'
                />
                <AboutCard
                  heading='Join Us on the Journey:'
                  paragraph='We invite you to explore our collection and experience the embodiment of years of dedication and passion. Davinch welcomes you to become a part of our journey, where craftsmanship meets creativity, and every piece tells a story. Discover the allure of hand-stitched leather goods that transcend trends, embracing a legacy of timeless elegance and unparalleled artistry.'
                />
              </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutHero