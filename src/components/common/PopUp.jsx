import React from 'react'
import { CrossWhiteIcon } from './Icons'

const PopUp = ({ setShowPopUp, showPopUp, setShowLogIn, children }) => {
    return (
        <div className={`fixed top-0 w-full h-full min-h-screen z-50 left-0 bg-black bg-opacity-80 duration-700 ${showPopUp ? "scale-100" : "scale-0"}`}>
            <span onClick={() => { setShowPopUp(false); setShowLogIn(false) }} className='absolute cursor-pointer top-4 right-4'><CrossWhiteIcon /></span>
            <div className="flex justify-center items-center min-h-screen">
                {children}
            </div>
        </div>
    )
}

export default PopUp
