import React, { useState } from 'react';
import { ClosedeyeIcon, EyeIcon } from '../common/Icons';

const LogInForm = ({ setShowPopUp, setShowLogIn }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    userType: ''
  });
  const [errors, setErrors] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  // Function to handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
    setIsSelected(true);
  };

  // Form validation logic
  const validateForm = () => {
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    if (!formData.password) {
      newErrors.password = "Password is required.";
    }

    if (!formData.userType) {
      newErrors.userType = "Please select a user type.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;

  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
      setShowPopUp(false);
    }
  };

  return (
    <div className='px-4 w-full mx-auto flex justify-center'>
      <div className='max-w-[500px] w-full p-4 md:p-6 lg:p-8 border border-white rounded-2xl login-bright'>
        <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif'>Log In</h2>
        <form className='flex flex-col gap-5 pt-7' onSubmit={handleSubmit}>

          {/* Email Input */}
          <div>
            <input
              type="email"
              name="email"
              className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base'
              placeholder='UserName'
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <small className="text-red-500 text-sm pt-1">{errors.email}</small>}
          </div>

          {/* Password Input */}
          <div className="">
            <div className='relative'>
              <input
                type={show ? "text" : "password"}
                name="password"
                className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base'
                placeholder='Password'
                value={formData.password}
                onChange={handleChange}
              />
              <span
                className='absolute top-1/2 right-0 cursor-pointer -translate-y-1/2 pe-3'
                onClick={() => setShow(!show)}
              >
                {show ? <ClosedeyeIcon /> : <EyeIcon />}
              </span>
            </div>
            {errors.password && <small className="text-red-500 text-sm pt-1">{errors.password}</small>}
          </div>

          {/* Select Dropdown */}
          <select
            className={`px-3 border py-2 cursor-pointer rounded-md border-gray-600 w-full outline-none text-base ${isSelected ? "text-opacity-100 text-black" : "text-opacity-55 text-black"
              }`}
            name="userType"
            value={formData.userType}
            onChange={handleChange}
          >
            <option value="" disabled hidden>Select User Type</option>
            <option value="STL">STL</option>
            <option value="IOT">IOT</option>
            <option value="AI CCTV">AI CCTV</option>
          </select>
          {errors.userType && <small className="text-red-500">{errors.userType}</small>}

          {/* Submit Button */}
          <input
            type="submit"
            className="bg-pink-600 hover:bg-blue-600 duration-300 w-full py-2 px-3 text-base font-bold text-white rounded-md cursor-pointer"
            value="Sign In"
          />
        </form>
        <p className='text-base mt-2 text-white'>You do not have an account?
          <span onClick={() => setShowLogIn(false)} className="text-blue-600 ms-1 cursor-pointer font-semibold hover:text-pink-600 duration-300"> Sign Up</span>
        </p>
      </div>
    </div>
  );
};

export default LogInForm;
