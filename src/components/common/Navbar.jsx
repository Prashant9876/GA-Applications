import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import PopUp from "./PopUp";
import LogInForm from "../login/LogInForm";
import SignUp from "../login/SignUpForm";

function Navbar() {
    const navbarRef = useRef();
    const [prevScrollPosition, setPrevScrollPosition] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const [showPopUp, setShowPopUp] = useState(false);
    const [showLogIN, setShowLogIn] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPosition = window.scrollY;
            let visibleHeader = isHeaderVisible;

            if (currentScrollPosition > 20) {
                visibleHeader = prevScrollPosition > currentScrollPosition;
            }

            setPrevScrollPosition(currentScrollPosition);
            setIsHeaderVisible(visibleHeader);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPosition, isHeaderVisible]);

    useEffect(() => {
        if (showPopUp) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [showPopUp]);

    return (
        <div>
            <div
                ref={navbarRef}
                className={`fixed top-0 left-0 right-0 w-full z-50 flex justify-center mt-8 transition-transform duration-1000 ${isHeaderVisible ? "translate-y-0 scale-100" : "-translate-y-[200px] scale-0"
                    }`}
            >
                <ul className="flex gap-2 sm:gap-5 md:gap-6 px-4 sm:px-5 lg:px-6 py-3 md:py-3.5 lg:py-4 border border-gray-500 rounded-full backdrop-blur-md bg-transparent">
                    <li>
                        <Link to="/" className="text-gray-800 hover:text-white text-base md:text-lg font-medium transition-all font-serif">Home</Link>
                    </li>
                    <li>
                        <Link to="/about" className="text-gray-800 hover:text-white text-base md:text-lg font-medium transition-all font-serif">About Us</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="text-gray-800 hover:text-white text-base md:text-lg font-medium transition-all font-serif">Contact</Link>
                    </li>
                    <li>
                        <Link to="/products" className="text-gray-800 hover:text-white text-base md:text-lg font-medium transition-all font-serif">Products</Link>
                    </li>
                    <li onClick={() => setShowPopUp(true)} className="text-gray-800 cursor-pointer hover:text-white text-base md:text-lg font-medium transition-all font-serif">Login </li>
                </ul>
            </div>
            {showPopUp &&
                <PopUp showPopUp={showPopUp} setShowPopUp={setShowPopUp} setShowLogIn={setShowLogIn} >
                    {showLogIN ? <LogInForm setShowPopUp={setShowPopUp} setShowLogIn={setShowLogIn} /> : <SignUp setShowPopUp={setShowPopUp} setShowLogIn={setShowLogIn} />}
                </PopUp>
            }
        </div>
    );
}

export default Navbar;