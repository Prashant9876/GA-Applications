import React, { useEffect } from 'react';
import video from '../../assets/videos/main-hero.mp4';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <div className="relative w-full min-h-screen flex items-center justify-center">
            {/* Background Video */}
            <div className='absolute top-0 left-0 w-full h-full bg-black -z-10'>
                <video
                    autoPlay
                    muted
                    loop
                    className="w-full h-full absolute object-top object-cover top-0 left-0"
                >
                    <source src={video} type="video/mp4" />
                </video>
            </div>
            <span className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-20'></span>

            {/* Content Over Video */}
            <div className="relative z-10 text-center max-w-[1340px] mx-auto px-4">
                <h1 data-aos="fade-up" data-aos-duration="3000" className="font-serif text-5xl md:text-6xl lg:text-7xl text-green-100 font-bold">
                    GA Applications
                </h1>
            </div>
        </div>
    );
};

export default Hero;


// IoTelligent Vision – A fusion of IoT and intelligent vision, suggesting smart connectivity and advanced image analysis.
// InnovaVista – Merges innovation with a visionary perspective, ideal for a tech-forward brand.
