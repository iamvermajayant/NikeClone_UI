import React from 'react'
import { offer } from '../assets/images'
import Button from '../Components/Button'

const SpecialOffer = () => {
  return (
    <section className='max-container flex justify-wrap items-center max-xl:flex-col-reverse gap-10'>
        <div className='flex-1 '>
          <img src={offer} alt=""  width={773} height={687} className='object-contain w-full'/>
        </div>
        <div className="flex-1 flex flex-col">
        <h2 className="font-palanquin text-4xl capitalize lg:max-w-lg font-bold">
          We Provide you
          <span className="text-coral-red "> Super</span>
          <br />
          <span className="text-coral-red ">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elavate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction{" "}
        </p>
        <div className="mt-11">
          <Button label="View Details"></Button>
        </div>
      </div>
    </section>  
  )
}

export default SpecialOffer