import React, { useEffect } from 'react';
import ABOUTbg from '../assets/gamebg.jpg';
import solPlay from '../assets/solplay_white.png';
import game_1 from '../assets/game_1.png';
import './Styles/AboutUs.css';

const AboutUs = () => {
    // Add a function to handle scroll animations
    const handleScroll = () => {
        const sections = document.querySelectorAll('.section');
        sections.forEach((section) => {
            const top = section.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (top < screenHeight * 0.75) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    // Add a scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="scroll-container">
            <div id="Section_one" className="section relative flex flex-col justify-center items-center">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter "
                    style={{
                        backgroundImage: `url(${ABOUTbg})`,
                    }}
                ></div>
                <img src={solPlay} className="w-[40rem] logo-fade-in" alt="solPlay_logo" />
                <p className="text-white text-xl mt-4 slogan-slide-in">Your Ultimate Place for Games</p>
            </div>
            <div id="section_two" className="section text-white bg-gradient-to-b from-purple-900 to-blue-500 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative flex top-48">
                    <img src={game_1} alt="game_1" className="absolute w-[25rem] left-32" />
                    <div className="ml-[40rem] text-left">
                        <h2 className="text-3xl font-semibold mb-4">Featured Game: Game 1</h2>
                        <ul className="list-disc pl-4">
                            <li className="text-lg leading-relaxed">Exciting Gameplay</li>
                            <li className="text-lg leading-relaxed">Stunning Graphics</li>
                            <li className="text-lg leading-relaxed">Multiplayer Mode</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Add more sections here */}

            <div id="section_three" className="section text-white bg-gradient-to-b from-purple-900 to-blue-500 relative">
    <div
        className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
        style={{
            backgroundImage: `url('')`,
        }}
    ></div>

    <div className="relative flex top-48">
        <div className="mr-[15rem] text-left"> {/* Adjusted margin here */}
            <h2 className="text-3xl font-semibold mb-4">Featured Game: Game 2</h2>
            <ul className="list-disc pl-4">
                <li className="text-lg leading-relaxed">Immersive Storyline</li>
                <li className="text-lg leading-relaxed">Open World Exploration</li>
                <li className="text-lg leading-relaxed">Incredible Soundtrack</li>
            </ul>
        </div>
        <img src={game_1} alt="game_2" className="absolute w-[25rem] right-32" />
    </div>
</div>

        </div>
    );
};

export default AboutUs;
