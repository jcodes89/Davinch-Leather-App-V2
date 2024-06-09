
'use client'
import React, { useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Process from './Process'
import img1 from '../../../public/images/idea.webp'
import img2 from '../../../public/images/sketch.webp'
import img3 from '../../../public/images/consult.webp'
import img4 from '../../../public/images/skin.webp'
import img5 from '../../../public/images/cutting.webp'
import img6 from '../../../public/images/wallet-destructure.webp'
import img7 from '../../../public/images/bag.webp'
import ScrollDownArrow from '../Arrow/ScrollDownArrow'

import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {useGSAP} from '@gsap/react'




const BespokeHero = () => {
  //gsap animation for text to come in from the left
  gsap.registerPlugin(ScrollTrigger) 
  const container = useRef()


useGSAP(() => {
    gsap.from('.listItem', {
      ease: 'expo',
      x: -3000,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: '.listItem',
        start: 'top 60%',
        end: 'center 30%',
        markers: false,
        toggleActions: 'play none none none ',
        scrub:false
      }
})
}, {scope: container})
  
  return (
    <>
    <section className=" h-full w-full">
      <div className="h-screen flex flex-col items-center relative">
        <h2 className={` text-gray-50 relative z-30 text-5xl top-1/2 `}>Bespoke</h2>
        <Link aria-label='Link to contact page where you can send ' className='btn relative z-30 top-[54%]  text-gray-50 hover:bg-accent hover:text-gray-50 text-base hover:scale-105' href={'/contact'}>Create Your Leather Goods!</Link>
        <ScrollDownArrow/>
      </div>
    </section>
    <section id='arrow' ref={container} className={` bg-gray-50 relative z-0 text-secondary p-3 pb-0 lg:px-40  2xl:px-56`}>
      <div className= {`w-fit h-full pt-0 p-4 my-3`}>
        <h3 className='lg:text-xl'><span className='font-semibold'><span className='text-accent text-xl'>B</span>espoke</span>, in the context of craftsmanship, refers to the creation of custom-made products tailored specifically to the individual needs, preferences, and measurements of the customer. The term originates from the British tailoring tradition, where bespoke suits are meticulously crafted by skilled artisans to fit the unique specifications of each client.  In leather craft, bespoke services offer customers the opportunity to personalize their leather goods according to their preferences, ensuring a truly unique and one-of-a-kind product. Here is how bespoke is tailored to leather craft:</h3>
      </div>
      <div id='list' className='pt-5'>
        <ul  className='p-4 pt-0 grid grid-cols-1 md:grid-cols-2 md:gap-4 bg-gray-50 text-secondary'>
          <li className={`listItem pb-2`}>
              <h4 className='lg:text-xl text-lg font-bold underline'>Customization Options:</h4>
              <p className='lg:text-lg py-2 md:py-0'>Bespoke leather craft allows customers to select from a wide range of customization options, including the type and color of leather, stitching patterns, hardware, and even personalized monograms or embossing. This level of customization ensures that each piece reflects the individual style and personality of the customer.</p>
          </li>
          <li className={`listItem pb-2`}>
              <h4 className='lg:text-xl text-lg font-bold underline'>Tailored Fit and Functionality:</h4>
              <p className='lg:text-lg py-2 md:py-0'>Just like bespoke tailoring ensures a perfect fit, bespoke leather craft ensures that the product is tailored to the specific needs and requirements of the customer. Whether it is a custom-designed bag with specific compartments or a wallet with tailored slots for cards and cash, bespoke leather goods are designed with both style and functionality in mind.</p>
          </li>
          <li className={`listItem pb-2`}>
              <h4 className='lg:text-xl text-lg font-bold underline'>Attention to Detail: </h4>
              <p className='lg:text-lg py-2 md:py-0'>Bespoke leather craft is characterized by meticulous attention to detail. Skilled artisans work closely with customers to understand their preferences and requirements, ensuring that every aspect of the product, from the stitching to the finishing touches, meets the highest standards of craftsmanship.</p>
          </li>
          <li className={`listItem pb-2`}>
              <h4 className='lg:text-xl text-lg font-bold underline'>Unique Artistry: </h4>
              <p className='lg:text-lg py-2 md:py-0'>Each bespoke leather piece is a work of art, crafted by hand with precision and care. Unlike mass-produced items, bespoke leather goods carry the mark of the artisan, with subtle variations and unique details that set them apart from off-the-shelf products.</p>
          </li>
          <li className={`listItem pb-2`}>
              <h4 className='lg:text-xl text-lg font-bold underline'>Quality and Durability: </h4>
              <p className='lg:text-lg py-2 md:py-0'>Bespoke leather craft prioritizes quality and durability. Artisans use only the finest materials and traditional techniques to create leather goods that are built to last a lifetime. By investing in bespoke leather craft, customers can enjoy not only a personalized product but also one that stands the test of time.</p>
          </li>
        </ul>
      </div>
    </section>
    <section className='bg h-full w-screen text-gray-50 p-3 md:p-0 pb-0 lg:px-40 2xl:px-56'>
      <div className='text-center p-3 w-full text-xl bg-gray-950 '>
        <h3>The Process</h3>
      </div>
      <div className='text-center grid md:grid-cols-2 py-3'>
        <Process
          heading='Step 1: Conceptualization and Inspiration'
          paragraph='The first step in creating a luxury leather good item is to conceptualize and determine the specific item to be made. This involves considering the purpose of the product and overall design aesthetic. It may involve brainstorming ideas, gathering information for functionality and purpose of the item to be made, and seeking inspiration from various sources.'
          src={img1}
          alt='Image of a lightbulb'
        />
        <Process
          heading='Step 2: Design and Sketching'
          paragraph='Once the concept is finalized, skilled craftsmen or designers create detailed sketches and design plans for the leather good item. This step involves considering the functional and aesthetic aspects of the product, including dimensions, features, and any intricate details. The goal is to translate the conceptual idea into a tangible design.'
          src={img2}
          alt='Image of a sketch of a bag'
        />
        <Process
          heading='Step 3: Client Consultation'
          paragraph={`The third step involves discussing the design with the client. This consultation allows for feedback, adjustments, and customization based on the client's preferences. This step is crucial in ensuring that the final product aligns with the client's vision and meets their specific requirements, whether it be personalized details, color preferences, or additional features.`}
          src={img3}
          alt='Image of a client and the artisan discussing business'
        />
        <Process
          heading='Step 4: Material Selection'
          paragraph={`After finalizing the design, the next step is to choose the appropriate materials. For luxury leather goods, selecting high-quality leather is paramount. Craftsmen carefully consider factors such as leather type, color, texture, and any additional materials like hardware or lining. The goal is to use premium materials that not only enhance the product's aesthetics but also contribute to its durability and longevity.`}
          src={img4}
          alt='Image of a alligator hide'
        />
        <Process
          heading='Step 5: Leather Cutting'
          paragraph='With the materials selected, the craftsmen move on to the cutting phase. This involves precision cutting of the leather based on the finalized design patterns. Skilled artisans use specialized tools to ensure accuracy and uniformity in the cut pieces. Attention to detail during this step is crucial to maintaining the overall quality of the final product.'
          src={img5}
          alt='Image of a leather artisan cutting leather'
        />
        <Process
          heading='Step 6: Assembly and Crafting'
          paragraph='Once the leather pieces are cut, the assembly process begins. Craftsmen skillfully put together the various components, paying meticulous attention to stitching, detailing, and any additional elements such as hardware or embellishments. This step requires a high level of craftsmanship to ensure the finished product meets the standards of luxury and sophistication.'
          src={img6}
          alt='Image of a stack of leather for a wallet waiting to be assembled by the aritsan'
        />
        <Process
          heading='Step 7: Quality Control and Final Enjoyment'
          paragraph='The final step involves a thorough quality control process. The crafted leather good item undergoes inspection to check for any imperfections, ensuring that it meets the established standards of quality. Once approved, the product is ready for delivery to the client, who can now enjoy their bespoke, handcrafted luxury leather item. This final step marks the culmination of the creative process, resulting in a unique and personalized piece that brings satisfaction and enjoyment to the client.'
          src={img7}
          alt='Image of a bag which is the final product.'
        />
      </div>
    </section>
    </>
  )
}

export default BespokeHero
