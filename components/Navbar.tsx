import React, { useState } from "react";
import {Link} from 'react-router-dom';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="bg-gray-900 p-4 shadow-lg">
            {/* Logo */}
            {/* <div className="text-white text-2xl font-bold">
                <Link to="/">MyApp</Link>
            </div> */}

            {/*Navigation links*/}
            <div className="hidden md:flex space-x-8">
                <Link to="/" className="text-white hover:text-blue-500">
                    Home
                </Link>
                <Link to="/about" className="text-white hover:text-blue-500">
                    About
                </Link>
                <Link to="/services" className="text-white hover:text-blue-500">
                    Services
                </Link>
                <Link to="/contact" className="text-white hover:text-blue-500">
                    Contact
                </Link>
            </div>

            {/* Hamburger menu for mobile
            <div className="md:hidden flex items-center space-x-4">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-6 w-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h15M4 12h16<4 16h16"
                        />
                    </svg>
                </button>
            </div> */}

            {/*Mobile Menu*/}
            {menuOpen && (
                <div className="md:hidden bg-gray-800 p-4 space-y-4">
                    <Link to="/" className="text-white hover:text-blue-500">Home</Link>
                    <Link to="/about" className="text-white hover:text-blue-500">About</Link>
                    <Link to="/services" className="text-white hover:text-blue-500">Services</Link>
                    <Link to="/contact" className="text-white hover:text-blue-500">Contact</Link>
                </div>
            )}

        </nav>
    );
};

export default Navbar;