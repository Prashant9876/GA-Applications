import React from 'react'
import Hero from '../components/home/Hero'
import ProductDetails from '../components/home/ProductDetails'
import WhoAreYou from '../components/home/WhoAreYou'
import ContactForm from '../components/home/ContactForm'
import Googlemap from '../components/common/GoogleMap'

const HomePage = () => {
  return (
    <div>

      <Hero />
      <WhoAreYou />
      <ProductDetails />
      <ContactForm />
      <Googlemap />
    </div>
  )
}

export default HomePage
