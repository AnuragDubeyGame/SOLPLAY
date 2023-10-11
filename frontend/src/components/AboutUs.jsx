import React, { useEffect } from 'react';
import ABOUTbg from '../assets/gamebg.jpg';
import solPlay from '../assets/solplay_white.png';
import game_2 from '../assets/game_2.png';
import game_3 from '../assets/game_3.png';
import game_4 from '../assets/solplay_icon.png';
import roadmap from '../assets/Roadmap.png';
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
        <div className="scroll-container w-screen italic">
            <div id="Section_one" className="section relative flex flex-col justify-center items-center">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter "
                    style={{
                        backgroundImage: `url(${ABOUTbg})`,
                    }}
                ></div>
                <img src={solPlay} className="w-[40rem] logo-fade-in" alt="solPlay_logo" />
                <p className="text-white text-xl mt-4 italic font-semibold slogan-slide-in">
                    Your Ultimate Place for Games
                </p>
            </div>
            <div id="section_two" className="section text-white bg-gray-800 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>
    
                <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b  text-white font-bold">
                    <img src={game_2} alt="game_1" className="absolute w-[25rem] left-32 flying-img" />

                    <div className="ml-[40rem] mr-[5rem] text-left">
                        <div class="glitch-wrapper">
                            <div class="glitch" data-glitch="Challenges in the World of Web Game Hosting">
                                Challenges in the World of Web Game Hosting
                            </div>
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <ul>
                            <li>Limited options for decentralized game hosting on Solana.</li>
                            <li>Difficulty for gamers to discover and play Solana-based games.</li>
                            <li>
                                Lack of a secure and seamless payment system for game developers to monetize their
                                creations.
                            </li>
                        </ul>
                    </div>
                </div>

                <div className='absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0'>
                    
                 </div>
            </div>

            <div
                id="section_three"
                className="section text-white bg-gray-800 relative"
            >
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative flex items-center justify-center min-h-screen  text-white font-bold">
                    <img src={game_3} alt="game_1" className="absolute w-[25rem] left-32 popping-img" />

                    <div className="ml-[40rem] mr-[5rem] text-left">
                        <div className="glitch-wrapper">
                            <div className="glitch" data-glitch="Market Opportunity">
                                Market Opportunity
                            </div>
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <ul>
                            <li>
                                The Solana ecosystem is growing rapidly, with an increasing demand for gaming platforms.
                            </li>
                            <li>Gamers and developers seeking user-friendly, decentralized solutions.</li>
                            <li>Empowering game developers to reach a wider audience.</li>
                        </ul>
                    </div>
                </div>
                <div className='absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0'>
                    
                    </div>
            </div>
            <div id="section_four" className="section text-white bg-gray-800 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b  text-white font-bold">
                    <img src={game_4} alt="game_1" className="absolute w-[25rem] left-32 flying-img" />

                    <div className="ml-[40rem] mr-[5rem] text-left">
                        <div className="glitch-wrapper">
                            <div className="glitch-wrapper-sloplay">
                                <p className="text-xl">Introducing, </p>
                                <div className="glitch-solplay" data-glitch="SOLPLAY">
                                    SOLPLAY
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <ul>
                            <li>
                                {' '}
                                SOLPLAY, a decentralized web game hosting platform on Solana. User-friendly interface
                                for
                            </li>
                            <li>
                                {' '}
                                gamers to browse and play games. Seamless integration with Phantom wallet for secure
                            </li>
                            <li>
                                {' '}
                                transactions. Categories like action, adventure, sports, and more for game discovery.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0'>
                    
                    </div>
            </div>
            <div id="section_four" className="section text-white bg-gray-800 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b text-white font-bold">
                    <div className="text-left">
                        <div className="glitch-wrapper"></div>
                    </div>
                    <div>
                        <div className="flex items-center">
                           
                            <img src={solPlay} className="w-[10rem] logo-fade-in relative top-[-5px]" alt="solPlay_logo" />
                            <h2 className="text-3xl mb-4"> vs. Traditional Game Hosting Platforms</h2>
                        </div>

                        <table className=" text-white shadow-lg w-[70rem] text-center table-auto h-[30rem]">
                            <thead>
                                <tr>
                                    <th className="border p-2 ">Feature</th>
                                    <th className="border p-2 bg-purple-700">SolPay</th>
                                    <th className="border p-2 bg-purple-500">Play Store</th>
                                    <th className="border p-2 bg-purple-500">Steam</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 bg-gray-500">Blockchain Integration</td>
                                    <td className="border p-2 bg-green-500">Yes (Solana)</td>
                                    <td className="border p-2 bg-red-500">No</td>
                                    <td className="border p-2 bg-red-500">No</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 bg-gray-500">Decentralization</td>
                                    <td className="border p-2 bg-green-600">Fully decentralized</td>
                                    <td className="border p-2 bg-red-500">Centralized</td>
                                    <td className="border p-2 bg-red-500">Centralized</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 bg-gray-500">Monetization</td>
                                    <td className="border p-2 bg-green-600">SOL tokens</td>
                                    <td className="border p-2 bg-red-500">Various (e.g., in-app purchases)</td>
                                    <td className="border p-2 bg-red-500">Various (e.g., game sales)</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 bg-gray-500">User-Created Games</td>
                                    <td className="border p-2 bg-green-500">Yes</td>
                                    <td className="border p-2 bg-red-400">Limited</td>
                                    <td className="border p-2 bg-red-400">Limited</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 bg-gray-500">Censorship</td>
                                    <td className="border p-2 bg-green-500">No</td>
                                    <td className="border p-2 bg-red-400">Possible</td>
                                    <td className="border p-2 bg-red-400">Possible</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0'>
                    
                    </div>
            </div>

            <div
                id="section_three"
                className="section text-white bg-gradient-to-b from-purple-900 to-blue-500 relative"
            >
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>
<img src={roadmap} alt='solplay_roadmap' className='w-[50rem]' />

            </div>

            {/* Add more sections here */}
        </div>
    );
};

export default AboutUs;
