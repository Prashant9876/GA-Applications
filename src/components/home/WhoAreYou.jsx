import React, { useEffect } from 'react';
import { WHO_ARE_YOU_AI_DATA_LIST, WHO_ARE_YOU_IMAGE_DATA_LIST } from '../common/Helper';
import Aos from 'aos';
import 'aos/dist/aos.css';

const WhoAreYou = () => {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    return (
        <div className='max-w-[1340px] mx-auto px-4 py-14 md:py-16 lg:py-20'>

            <h2 data-aos="fade-down" className='font-serif text-3xl md:text-4xl lg:text-5xl text-green-500 font-bold text-center pb-8 md:pb-8 lg:pb-10'>
                Who We Are
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

                <div data-aos="fade-left">
                    <p className='text-base text-black text-opacity-80 pb-6 font-bold'>
                        At GA Applications, we are revolutionizing the way businesses operate by creating cutting-edge automation tools that harness the power of the Internet of Things (IoT) and Artificial Intelligence/Machine Learning (AI/ML). Our mission is simple: to empower organizations with intelligent solutions that drive efficiency, innovation, and growth.
                    </p>


                    <div className="grid grid-cols-2 max-w-max gap-6">
                        {WHO_ARE_YOU_AI_DATA_LIST.map((obj, i) => {
                            return (
                                <div
                                    key={i}
                                    data-aos="zoom-in"
                                    className='p-4 rounded-md duration-300 hover:scale-105 shadow-current bg-green-500 flex flex-col items-center'
                                >
                                    <img className='h-20 w-24 object-contain object-center' src={obj.image} alt='ai all data' />
                                    <h3 className='text-white text-lg md:text-xl lg:text-2xl font-semibold'>{obj.title}</h3>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='grid grid-cols-2 gap-6 max-h-max'>
                    {WHO_ARE_YOU_IMAGE_DATA_LIST.map((obj, i) => {
                        return (
                            <div
                                key={i}
                                data-aos="fade-left"
                                className='border border-green-500 overflow-hidden rounded-md group w-full h-full flex justify-center items-center'
                            >
                                <img src={obj.image} alt='who are' className='group-hover:scale-110 duration-300' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default WhoAreYou;
