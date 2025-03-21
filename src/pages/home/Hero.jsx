import React from 'react'
import bannerImg from "../../assets/home/hero.png";

const Hero = () => {
  return (
    <section  className={`section-container relative h-96 bg-cover bg-center flex items-center justify-center`} style={{ backgroundImage: `url(${bannerImg})` }} >
       <div className='sm:w-1/2 hidden sm:block'></div>
       <div className='w-full sm:w-1/2'>
        <div className='bg-[#FFF3E3] px-6 py-6 space-y-2 text-center sm:text-left'>  
          <h4 className='capitalize text-primary text-sm'>New Arrival</h4>
          <h1 className='capitalize text-primary text-4xl font-bold lg:w-1/2'>Discover Our
            New Collection</h1>
          <p className='text-gray-900 lg:w-3/4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
          <button className='uppercase text-white bg-primary hover:bg-primary/90 cursor-pointer transition-colors  font-medium text-sm px-6 py-2 rounded-sm'>Buy Now</button>
        </div>
       </div>
    </section>
  )
}

export default Hero