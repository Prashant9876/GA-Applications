import React from 'react'
import { Link } from 'react-router-dom'
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from './Icons'

const Footer = () => {
    return (
        <div className='bg-green-600'>
            <div className="max-w-[1320px] px-4 mx-auto pt-14 md:pt-16 lg:pt-20 pb-7">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-1 lg:gap-10">
                    <div className="flex flex-col items-center md:items-start">
                        <h2 className='text-yellow-500 text-3xl sm:text-[26px] md:text-4xl lg:text-5xl font-bold text-nowrap font-serif'>GA Applications</h2>
                        <p className=' text-center md:text-left pt-4 md:text-lg font-bold text-white font-mono '>Empowering Your Business with Cutting-Edge Automation & AI Solutions</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 sm:ms-5 lg:ms-28 xl:ms-10">
                        <h3 className='text-2xl md:text-3xl font-bold font-serif text-yellow-500'>Company</h3>
                        <Link className='text-center text-sm md:text-bold text-white  font-medium hover:text-yellow-500 duration-300 mt-2 font-mono' to={"/"}>Contact</Link>
                        <Link className='text-center text-sm md:text-bold text-white  font-medium hover:text-yellow-500 duration-300 font-mono' to={"/"}>About</Link>
                        <Link className='text-center text-sm md:text-bold text-white  font-medium hover:text-yellow-500 duration-300 font-mono' to={"/"}>Trem of Services</Link>
                        <Link className='text-center text-sm md:text-bold text-white  font-medium hover:text-yellow-500 duration-300 font-mono' to={"/"}>Privacy Policy</Link>
                    </div>
                    <div className="flex flex-col items-center gap-2">
                        <h3 className=' text-2xl md:text-3xl font-bold font-serif text-yellow-500'>Company</h3>
                        <Link className='text-center text-sm md:text-base text-white font-medium group duration-300 mt-2' to={"https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2F"}target='_
                        blank'rel='noopener noreferrer'><FacebookIcon /></Link>
                        <Link className='text-center text-sm md:text-base text-white font-medium group duration-300' to={"https://www.instagram.com/accounts/login/?hl=en"}target='_blank'rel='noopener noreferrer'><InstagramIcon /></Link>
                        <Link className='text-center text-sm md:text-base text-white font-medium group duration-300' to={"https://twitter.com/yourProfile"}target='_blank'rel='noopener noreferrer'><TwitterIcon /></Link>
                        <Link className='text-center text-sm md:text-base text-white font-medium group duration-300' to={"https://www.linkedin.com/in/yourProfile"} target="_blank"
                         rel="noopener noreferrer"><LinkedinIcon /></Link>
                        
                    </div>
                </div>
            </div>
            <div className="border-t border-black border-opacity-40 py-4">
                <div className="max-w-[1320px] px-4 mx-auto flex sm:justify-between flex-col gap-2 sm:flex-row items-center">
                    <p className='text-sm md:text-base text-white text-opacity-70'>Contact us: <Link to={"/"} className='hover:text-yellow-500 duration-300'>home@gaapplications.com</Link></p>
                    <p className='text-sm md:text-base text-white text-opacity-70'>© 2025 Automation. All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer
