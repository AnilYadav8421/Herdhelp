import React from 'react';

const ContactUs = () => {
    return (
        <section className="bg-black py-16 px-6 md:px-12">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-2">CONTACT US</h2>
                <p className="text-lg text-white">Reach out for help or just say hello</p>
            </div>

            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-stretch">
                <div className="w-full md:w-1/2 h-full p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <h3 className="text-2xl font-semibold text-green-600 mb-6">SEND US A MESSAGE</h3>

                    <form className="space-y-4 flex-1  bg-black text-white ">
                        <div>
                            <label className="block text-white font-medium">Name</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-black text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-medium">Email</label>
                            <input
                                type="email"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-black text-white"
                            />
                        </div>

                        <div>
                            <label className="block text-white font-medium">Subject</label>
                            <input
                                type="text"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-black text-white "
                            />
                        </div>

                        <div>
                            <label className="block text-white font-medium">Message</label>
                            <textarea
                                rows="5"
                                className="w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600 bg-black text-white"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="bg-green-600 hover:bg-green-800 w-full text-white font-bold py-2 px-6 rounded-3xl transition"
                        >
                            SEND
                        </button>
                    </form>
                </div>

                <div className="w-full md:w-1/2 h-full bg-black text-white p-6 rounded-lg shadow-md flex flex-col justify-between">
                    <h3 className="text-2xl font-semibold text-green-600 mb-6">CONTACT INFO</h3>
                    <div className="space-y-6 text-white text-lg flex-1">
                        <div>
                            <p className="font-semibold">Where to Find Us</p>
                            <p>Deer Park, Alabama 36529</p>
                        </div>

                        <div>
                            <p className="font-semibold">Email Us At</p>
                            <p>contact@herdhelp.com</p>
                        </div>

                        <div>
                            <p className="font-semibold">Call Us At</p>
                            <p>+1 (251) 747-8563</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
