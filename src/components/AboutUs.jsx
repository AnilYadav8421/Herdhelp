import React from 'react';

const AboutUs = () => {
    return (
        <section className="w-full bg-green-500 px-4 sm:px-8 md:px-16 lg:px-24 py-10 mt-2 text-white">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
                    We Are Herd Help
                </h2>
                <p className="text-base sm:text-lg leading-relaxed text-justify">
                    My friend and I needed a livestock software program for our farms so that we could accurately track our animals, their health, and profitability. We tried other apps, software programs, and spreadsheets, to help with the record keeping but we couldn’t find a livestock management app that was easy to use and fit our needs.
                    <br /><br />
                    So, we created a piece of software that would track any animals that we might bring to our farm, whether it be cattle, sheep, goats, rabbits, pigs, or horses. The app was created to work on Android or iPhone cellular devices as well as on your laptop. We needed a product that was available while in the field and a larger version to see for reporting back at home.
                    <br /><br />
                    The cattle management software was created for my buddy who primarily raises cows. I needed goat management software for my goats and sheep management software in case my neighbor needed help. But, we have also been known to keep other animals on the farm occasionally. We added in pig management, rabbit management, and horse management tools to make it a complete farm software program.
                    <br /><br />
                    Why create a cattle app when you raise goats, cattle, sheep, pigs, rabbits, and horses? Well, when you think about a homestead, you realize that most small farms will at one point have all of these animals and each of them needs a record keeping software program to help get them through tough decisions.
                </p>
            </div>
        </section>
    );
};

export default AboutUs;
