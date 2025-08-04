import React from 'react';

const features = [
    {
        title: 'Identifying Profitable',
        description:
            'When proper livestock record keeping is kept on every animal, you start to understand if your livestock are making you a profit. My business partner shipped cows twice before he remembered to ship one cow that had prolapsed on him. This means that he fed her for two years longer than he needed. She produced zero profit in those two years. In our app we have a place to flag certain animals so these scenarios do not take place.',
    },
    {
        title: 'Control Your Expenses',
        description:
            'Herd Help Livestock Management Software has specific places to track your expenses by category. This gives you the ability to see where you are spending your money. For example feed, fencing, medications, etc. Understanding your expenses will make life easier! Our livestock management documentation software should help you manage each piece of your farm program better.',
    },
    {
        title: 'Herd Weight',
        description:
            'Herd Help Livestock Management Software will help you track birth weights and daily gains. We don’t care which animals you raise, whether it’s goats, cattle, sheep, pigs, horses, or rabbits, you will see better livestock come from your farm if you know and understand how to increase weights.',
    },
    {
        title: 'Herd Health',
        description:
            'Herd Help Livestock Management Software will help you by properly tracking each medication that you administer. It has a simple feature that allows you to treat and document actions on individual animals or on every goat in your herd with one easy step.',
    },
    {
        title: 'Set Alerts for Your Herd',
        description:
            'Herd Help Livestock Management Software has a key feature that allows you to set reminders. If you document that goat number 150 gets bred on Oct 2, you can then set a reminder to alert you in 145 days to start watching for your babies.',
    },
    {
        title: 'Birthing',
        description:
            'Herd Help Livestock Management Software will assist you in understanding every aspect of your birthing. Proper livestock documentation will show you when your kidding will start taking place and track year over year the amount of babies each animal has.',
    },
];

const WhatWeDo = () => {
    return (
        <section className="bg-gray-100 text-gray-800 px-4 sm:px-8 md:px-16 py-16 w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-center mb-2">WHAT WE DO</h2>
                <p className="text-lg md:text-xl text-center text-gray-600 mb-10">
                    We’ve got everything you need to launch and grow your business
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
                            <h3 className="text-xl font-semibold mb-2 text-green-700">{feature.title}</h3>
                            <p className="text-gray-700 text-justify">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
