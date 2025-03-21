
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/common/Navbar'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Footer from './components/common/Footer'
import ContactPage from './pages/ContactPage'
import ProductPage from './pages/ProductPage'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from 'react';


function App() {

  useEffect(() => {
    AOS.init({ once: true, })
  });

  return (
    <>
    <div className='overflow-hidden'>
      <Navbar />
      <Routes>
        <Route path='/' element={< HomePage />}></Route>
        <Route path='/products' exact element={<ProductPage />}></Route>
        <Route path='/about' element={<AboutPage />}></Route>
        <Route path='/contact' element={< ContactPage />}></Route>
      </Routes>
      <Footer />
      </div>
    </>
  );
}


export default App;



