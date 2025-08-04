import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../assets/banner-1.jpeg';
import img2 from '../assets/banner-2.jpeg';
import img3 from '../assets/banner-3.jpeg';

const ImageCarousel = () => {
    const images = [img1, img2, img3];

    return (
        <div className="w-full ">
            <Swiper
                modules={[Autoplay, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                autoplay={{ delay: 4000 }}
                pagination={{ clickable: true }}
                loop={images.length > 1}
                className="w-full h-full sm:h-[60vh] md:h-[70vh] lg:h-[calc(100vh-80px)]"
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <div
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, ease: 'easeInOut' }}
                            className="w-full h-[30vh] sm:h-[55vh] md:h-[70vh] lg:h-[calc(100vh-64px)] overflow-hidden shadow-md"
                        >
                            <img
                                src={src}
                                alt=''
                                className="w-full h-full object-fill transition-transform duration-500 ease-in-out"
                                loading="lazy"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default ImageCarousel;
