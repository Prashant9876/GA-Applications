import React, { useState } from 'react';
import { ClosedeyeIcon, EyeIcon } from '../common/Icons';

const SignUpForm = ({ setShowPopUp, setShowLogIn }) => {
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    userName: '',
    email: '',
    phonNumber: '',
    password: '',
    confirmPassword: '',
    profilePick: '',
    tremAndConditionCheckBox: false,
    newsLetterCheckBox: false,
  });
  const [errors, setErrors] = useState({});
  const [isSelected, setIsSelected] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
    setErrors({ ...errors, [name]: '' });
    setIsSelected(true);
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstname) newErrors.firstname = 'First name is required.';
    if (!formData.lastname) newErrors.lastname = 'Last name is required.';
    if (!formData.userName) newErrors.userName = 'Username is required.';
    if (!formData.email) newErrors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format.';
    if (!formData.phonNumber) newErrors.phonNumber = 'Phone number is required.';
    if (!formData.password) newErrors.password = 'Password is required.';
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = 'Passwords do not match.';
    if (!formData.userType) newErrors.userType = 'Please select a user type.';
    if (!formData.tremAndConditionCheckBox)
      newErrors.tremAndConditionCheckBox = 'You must agree to the terms and conditions.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert('Form submitted successfully!');
      setShowPopUp(false);
    }
  };

  return (
    <div className='px-2 sm:px-3 w-full mx-auto flex justify-center'>
      <div className='max-w-[500px] w-full p-4 px-2 sm:px-4 md:p-6 border border-white rounded-2xl login-bright'>
        <h2 className='text-center text-3xl md:text-4xl lg:text-5xl font-bold text-white font-serif'>Sign Up</h2>
        <form className='flex flex-col gap-3 pt-4' onSubmit={handleSubmit}>
          <div className="flex gap-1 sm:gap-3 w-full">
            {/* First Name */}
            <div className='w-full'>
              <input type='text' name='firstname' className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base' placeholder='First Name' value={formData.firstname} onChange={handleChange} />
              {errors.firstname && <small className='text-red-500'>{errors.firstname}</small>}
            </div>

            {/* Last Name */}
            <div className='w-full'>
              <input type='text' name='lastname' className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base' placeholder='Last Name' value={formData.lastname} onChange={handleChange} />
              {errors.lastname && <small className='text-red-500'>{errors.lastname}</small>}
            </div>
          </div>

          {/* Username */}
          <div>
            <input type='text' name='userName' className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base' placeholder='Username' value={formData.userName} onChange={handleChange} />
            {errors.userName && <small className='text-red-500'>{errors.userName}</small>}
          </div>

          <div className="flex gap-1 sm:gap-3">
            {/* Email */}
            <div className='w-full'>
              <input type='email' name='email' className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base' placeholder='Email' value={formData.email} onChange={handleChange} />
              {errors.email && <small className='text-red-500'>{errors.email}</small>}
            </div>

            {/* Phone Number */}
            <div className='w-full'>
              <input type='text' name='phonNumber' className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base' placeholder='Phone Number' value={formData.phonNumber} onChange={handleChange} />
              {errors.phonNumber && <small className='text-red-500'>{errors.phonNumber}</small>}
            </div>
          </div>

          <div className="flex gap-1 sm:gap-3">
            {/* Password */}
            <div className=' w-full'>
              <div className="relative">
                <input type={show ? 'text' : 'password'} name='password' className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base' placeholder='Password' value={formData.password} onChange={handleChange} />


                <span className='absolute top-1/2 right-0 cursor-pointer -translate-y-1/2 pe-3' onClick={() => setShow(!show)}>
                  {show ? <ClosedeyeIcon /> : <EyeIcon />}
                </span>
              </div>
              {errors.password && <small className='text-red-500'>{errors.password}</small>}
            </div>

            {/* Confirm Password */}
            <div className='w-full'>
              <input type='password' name='confirmPassword' className='px-3 border py-2 rounded-md border-gray-600 w-full outline-none text-base' placeholder='Confirm Password' value={formData.confirmPassword} onChange={handleChange} />
              {errors.confirmPassword && <small className='text-red-500'>{errors.confirmPassword}</small>}
            </div>
          </div>

          {/* Profile Picture */}
          <div>
            <input type='file' name='profilePick' className=' border-gray-600 w-full outline-none text-base text-white' onChange={handleChange} />
          </div>

          {/* Terms and Conditions */}
          <div>
            <label className='flex items-center gap-2 text-white'>
              <input type='checkbox' name='tremAndConditionCheckBox' checked={formData.tremAndConditionCheckBox} onChange={handleChange} />
              I agree to the Terms and Conditions
            </label>
            {errors.tremAndConditionCheckBox && <small className='text-red-500'>{errors.tremAndConditionCheckBox}</small>}
            <label className='flex items-center gap-2 text-white'>
              <input type='checkbox' name='newsLetterCheckBox' checked={formData.newsLetterCheckBox} onChange={handleChange} />
              Subscribe to our newsletter
            </label>
          </div>

          {/* Submit Button */}

          <input type='submit' className='bg-pink-600 hover:bg-blue-600 duration-300 w-full py-2 px-3 text-base font-bold text-white rounded-md cursor-pointer' value='Sign Up' />

        </form>
        <p className='text-base mt-2 text-white'>You have an already account?
          <span onClick={() => setShowLogIn(true)} className="text-blue-600 ms-1 cursor-pointer font-semibold hover:text-pink-600 duration-300"> Log In</span>
        </p>
      </div>
    </div>
  );
};

export default SignUpForm;
