import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='max-container flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
        <div className='flex-1 '>
          <img src={offer} alt=""  width={773} height={687} className='object-contain w-full'/>
        </div>
        <div className="flex-1 flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          <span className="text-coral-red "> Special</span> Offer 
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Embark on a shopping journey that redefines your experience with unbeatable deals.
          From premier selections to incredible savings. We offer unparralleled value that sets you apart 
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
         Navigate a realm of possibilities designed to fullfill your unique desires, surpassing the loftliest expectations.
         Your journey with us is nothing short of exceptional.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Button label="Shop now" iconUrl={arrowRight}></Button>
          <button 
            className='flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-white rounded-full text-coral-red border-coral-red'
          >View Offer</button>
        </div>
      </div>
    </section>  
  )
}

export default SpecialOffer