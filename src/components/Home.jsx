import React from 'react'
import AboutUs from "./AboutUs";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import ImageCarousel from "./ImageCarousel";
import Navbar from "./Navbar";
import TheOneApp from "./TheOneApp";
import Tutorials from "./Tutorials";
import WhatWeDo from "./WhatWeDo";

const Home = () => {
    return (
        <>
            <Navbar />
            <ImageCarousel />
            <AboutUs />
            <WhatWeDo />
            <Tutorials />
            <TheOneApp />
            <ContactUs />
            <Footer />
        </>
    )
}

export default Home