import React from 'react';
import android from '../assets/AndroidIcon.png';
import apple from '../assets/AppleIcon.png';

import app1 from '../assets/app1.png';
import app2 from '../assets/app2.png';
import app3 from '../assets/app3.png';
import app4 from '../assets/app4.png';

const features = [
    {
        img: app1,
        descp: 'Track health of your animals',
    },
    {
        img: app2,
        descp: 'Track animal birthing',
    },
    {
        img: app3,
        descp: 'Take control of expenses and profits',
    },
    {
        img: app4,
        descp: 'Identify profitable animals',
    },
];

const TheOneApp = () => {
    return (
        <section className="w-full bg-white py-16 px-6 md:px-12">
            <div className="max-w-5xl mx-auto flex flex-col lg:flex-row justify-between items-center text-center gap-10">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-green-800 mb-4">
                        THE ONE APP
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-700 font-medium mb-10 border-b">
                        That puts you back in control
                    </p>
                    <div className="flex justify-center items-center gap-5">
                        {/* <img className="bg-green-600 rounded-full p-3 w-12 h-12" src={android} alt="Android" /> */}
                        <img className="bg-green-600 rounded-full p-3 w-12 h-12" src={apple} alt="Apple" />
                    </div>
                </div>

                <ul className="w-full lg:w-1/2 flex flex-col text-left text-lg gap-3 text-gray-800 font-semibold">
                    {features.map((feature, index) => (
                        <li
                            key={index}
                            className="flex items-center gap-4 bg-black text-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition"
                        >
                            <img
                                src={feature.img}
                                alt={`Feature ${index + 1}`}
                                className="w-14 h-14 object-contain rounded-full bg-green-600 p-2"
                            />
                            <span>{feature.descp}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default TheOneApp;
