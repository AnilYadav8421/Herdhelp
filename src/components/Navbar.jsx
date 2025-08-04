import React from 'react';
import logo from '../assets/logo.png';
import android from '../assets/AndroidIcon.png';
import apple from '../assets/AppleIcon.png';

const Navbar = () => {
    return (
        <nav className="bg-black py-6 px-8 w-full shadow-md">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                <img src={logo} alt="logo" className="w-32" />
                <div className="flex gap-6 items-center">
                    {/* <img src={android} alt="Android" className="w-8 h-8" /> */}
                    <img src={apple} alt="Apple" className="w-8 h-8" />
                    <h1 className="text-green-500 font-bold text-lg">LOGIN</h1>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
