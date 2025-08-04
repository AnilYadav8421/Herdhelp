import React from 'react';

const videos = [
    {
        title: 'Getting Started with Herd Help',
        url: 'https://www.youtube.com/embed/4gZZbMJDsqg',
    },
    {
        title: 'Tracking Animal Health & Meds',
        url: 'https://www.youtube.com/embed/y3CvZ4nUJRM',
    },
    {
        title: 'Using the App in the Field',
        url: 'https://www.youtube.com/embed/wnWbbgfSCpc',
    },
];

const Tutorials = () => {
    return (
        <section className="bg-black px-4 sm:px-8 md:px-16 py-16 w-full">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-3 text-white">SEE HOW OUR APP WORKS</h2>
                <p className="text-lg md:text-xl text-white mb-12">
                    We love what we do, check out some of our Tutorials
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {videos.map((video, index) => (
                        <div key={index} className="aspect-video w-full shadow-lg rounded-xl overflow-hidden">
                            <iframe
                                width="100%"
                                height="100%"
                                src={video.url}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="w-full h-full"
                            ></iframe>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tutorials;
