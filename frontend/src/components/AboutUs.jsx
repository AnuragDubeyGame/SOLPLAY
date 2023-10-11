import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import ABOUTbg from '../assets/gamebg.jpg';
import solPlay from '../assets/solplay_white.png';
import game_2 from '../assets/game_2.png';
import check_1 from '../assets/game_4.png';
import game_4 from '../assets/solplay_icon.png';
import roadmap from '../assets/Roadmap.png';
import video from '../assets/SOLPLAY.mp4';
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
                            <div class="glitch" data-glitch="SOLPLAY is addressing several critical issues">
                                SOLPLAY is addressing several critical issues
                            </div>
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <ul>
                            <li className="my-2">
                                <b className="bg-purple-800 px-2  rounded-lg ">High Fees:</b> Traditional gaming
                                platforms impose significant fees on developers and gamers, restricting accessibility
                                and profitability.
                            </li>
                            <li className="my-2">
                                <b className="bg-purple-800 px-2  rounded-lg ">Centralization:</b> Centralized platforms
                                compromise data security and control, inhibiting the true potential of Web3 gaming.
                            </li>
                            <li className="my-2">
                                <b className="bg-purple-800 px-2  rounded-lg ">Transition to Web3:</b> SOLPLAY is
                                committed to simplifying the transition for those who may find it challenging to embrace
                                the world of Web3 gaming, ensuring inclusivity and ease of adoption.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">PROBLEMS</span>
                </div>
            </div>

            <div id="section_three" className="section text-white bg-gray-800 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative items-center justify-center min-h-screen text-white font-bold">
                    {/* <img src={game_3} alt="game_1" className="absolute w-[10rem] left-20 popping-img" /> */}

                    <div className="video-container flex w-full h-screen items-center justify-center">
                        <ReactPlayer
                            url={video} // Replace with your video URL
                            controls={true}
                            width="70%"
                            height="70%"
                            light={ABOUTbg}
                        />
                    </div>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">DEMO</span>
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
                <div className="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0"></div>
            </div>
            <div id="section_two" className="section text-white bg-gray-800 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b  text-white font-bold">
                    <img src={check_1} alt="game_1" className="absolute w-[25rem] left-32 flying-img" />

                    <div className="ml-[40rem] mr-[5rem] text-left">
                        <div class="glitch-wrapper">
                            <div class="glitch" data-glitch="Why SOLPLAY">
                                Why SOLPLAY
                            </div>
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <ul>
                            <li className="my-2">
                                <b className="bg-yellow-500 px-2  rounded-lg ">Solana Ecosystem Boom:</b> The Solana
                                ecosystem is currently experiencing rapid expansion, making it the ideal time to seize
                                the growing opportunities in this thriving blockchain environment.
                            </li>
                            <li className="my-2">
                                <b className="bg-green-500 px-2  rounded-lg ">Emerging Demand:</b> The increasing demand
                                for a dedicated Web3 gaming platform on Solana highlights an unmet need in the market.
                                SOLPLAY is here to fill that void.
                            </li>
                            <li className="my-2">
                                <b className="bg-purple-800 px-2  rounded-lg ">Transition to Web3:</b> SOLPLAY is
                                committed to simplifying the transition for those who may find it challenging to embrace
                                the world of Web3 gaming, ensuring inclusivity and ease of adoption.
                            </li>
                            <li className="my-2">
                            <b className="bg-blue-500 px-2  rounded-lg "> Developer Innovation:</b> Game developers are exploring new frontiers in blockchain gaming,
                                and SOLPLAY offers a platform that empowers them to unleash their creativity and share
                                in the rewards.
                            </li>
                            <li className="my-2">
                            <b className="bg-red-500 px-2  rounded-lg "> Blockchain Momentum:</b> With the global momentum behind blockchain technology, the Web3
                                gaming industry is poised for exponential growth. SOLPLAY is well-positioned to lead the
                                way in this exciting frontier.
                            </li>

                        </ul>
                        <p className='bg-gray-600 p-2 rounded-lg'>Now is the time to embark on this remarkable journey with SOLPLAY, as we harness the full potential of Web3 gaming on Solana!</p>
                    </div>
                    
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE REASON</span>
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
                            <img
                                src={solPlay}
                                className="w-[10rem] logo-fade-in relative top-[-5px]"
                                alt="solPlay_logo"
                            />
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
                <div className="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0"></div>
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
                <img src={roadmap} alt="solplay_roadmap" className="w-[50rem]" />
            </div>

            {/* Add more sections here */}
        </div>
    );
};

export default AboutUs;
