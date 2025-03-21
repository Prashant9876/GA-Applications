import React, { useEffect } from 'react';
import { PRODUCT_DETAILS_DATA_LIST } from '../common/Helper'
import Aos from 'aos';
import 'aos/dist/aos.css';
const ProductDetails = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className='bg-green-400 bg-opacity-85'>
      <div className='max-w-[1340px] mx-auto px-4 py-14 md:py-16 lg:py-20'>
        <h2 data-aos="fade-up" className='text-3xl md:text-4xl lg:text-5xl text-white font-bold text-center font-serif'>Our Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 md:gap-6 mt-8 md:mt-10 lg:mt-12">
          {PRODUCT_DETAILS_DATA_LIST.map((obj, i) => {
            return (
              <div key={i} data-aos="zoom-in" className='bg-white p-4 rounded-md group hover:shadow-2xl shadow-blue-900 duration-300'>
                <h3 className='text-green-400 text-center text-xl font-bold md:text-2xl lg:text-[22px] xl:text-[28px] pb-2'>{obj.title}</h3>
                <div className="flex justify-center h-[280px] overflow-hidden py-3">
                  <img className='h-[280px] group-hover:scale-105 duration-300 object-cover object-center' src={obj.image} alt='trafall all' />
                </div>
                <p className='text-black pt-4 text-center text-base md:text-[17px]'>{obj.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
