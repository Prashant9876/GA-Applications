import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [errors, setErrors] = useState({});

    useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Invalid email format";
        }
        if (!formData.message.trim()) newErrors.message = "Message is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Form submitted successfully");
        }
    };

    return (
        <div className="max-w-[1320px] px-4 mx-auto flex flex-col items-center py-14 md:py-16 lg:py-20">
            {/* Main Heading */}
            <h2 data-aos="fade-up" className="text-green-500 font-bold text-4xl md:text-5xl lg:text-6xl mb-8 md:mb-10 lg:mb-12 font-serif">
                Contact
            </h2>

            <div className="flex flex-col md:flex-row gap-12 md:gap-6 lg:gap-12 max-w-4xl w-full">
                {/* Left Section: Contact Details */}
                <div data-aos="fade-right" className="bg-green-500 text-white p-6 rounded-lg flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 font-serif">Contact Us</h3>
                    <div className="mb-6">
                        <h3 className="text-lg md:text-2xl  font-bold font-mono text-[#1E71FF]">Reach Us</h3>
                        <Link to={"/"} className='text-base mt-2 block  font-medium font-mono'>Home@gaapplications.com</Link>
                    </div>
                    <div className="mb-6">
                        <h3 className="text-lg md:text-xl font-bold font-mono text-[#1E71FF]">Call</h3>
                        <Link to={"/"} className=' text-base  font-medium font-mono  mt-2 block'>+91 8340291901</Link>
                    </div>
                    <div>
                        <h3 className="text-lg md:text-xl  font-bold font-mono text-[#1E71FF]">Visit Us</h3>
                        <p className='text-base mt-2 block  font-medium font-mono '>
                            24, A Block, Defence Colony, <span className='block'>Hisar, Haryana 125001</span>
                        </p>
                    </div>
                </div>

                {/* Right Section: Contact Form */}
                <div data-aos="fade-left" className="bg-green-500 text-white p-6 rounded-lg flex-1">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-8 font-serif">Get in Touch</h3>
                    <form className="space-y-3" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-lg md:text-xl pb-1 font-bold font-mono text-white">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            {errors.name && <p className="text-red-700 text-sm pt-0.5">{errors.name}</p>}
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-lg md:text-xl pb-1 font-bold text-white font-mono">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full px-3 py-2 rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            {errors.email && <p className="text-red-700 text-sm pt-0.5">{errors.email}</p>}
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-lg md:text-xl pb-1 font-bold text-white font-mono">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full px-3 py-2 h-32 resize-none rounded-md bg-white border border-gray-700 text-black focus:outline-none focus:ring-2 focus:ring-white"
                            />
                            {errors.message && <p className="text-red-700 text-sm pt-0.5">{errors.message}</p>}
                        </div>
                        <button
                            data-aos="fade-left"
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-pink-600 text-white font-bold py-2 rounded-md transition duration-300 font-mono"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default ContactForm;
