import React from 'react';
import logo from '../assets/logo.png'; 

const Footer = () => {
    return (
        <footer className="bg-green-900 text-white py-10 px-6">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:justify-between gap-6 text-center md:text-left">

                <div className="flex flex-col items-center md:items-start gap-2">
                    <img src={logo} alt="Herd Help Logo" className="h-10 w-auto" />
                    <p className="text-sm text-gray-300">
                        ©2025 Grace and Peace LLC (AL). All rights reserved.
                    </p>
                </div>

                <div className="flex gap-6 text-sm font-medium text-gray-200">
                    <a href="/terms" className="hover:text-white transition">Terms & Service</a>
                    <a href="/privacy" className="hover:text-white transition">Privacy</a>
                    <a href="/contact" className="hover:text-white transition">Contact Us</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
