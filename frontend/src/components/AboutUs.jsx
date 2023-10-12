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
                    Unlocking Web3 Gaming for Millions
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
                            <div class="glitch" data-glitch="WEB3 Gaming Faces several critical issues">
                                WEB3 Gaming Faces several critical issues
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
                                <b className="bg-purple-800 px-2  rounded-lg ">Transition to Web3:</b> The persistent
                                challenge of moving from traditional gaming to the intricate realm of Web3, still
                                presenting hurdles for the average gamer.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE PROBLEM</span>
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
                                The pioneering Web3 game hosting platform on Solana. With an unwavering mission to make
                                Web3 gaming accessible to millions, we've built a platform that empowers both gamers and
                                developers. Enjoy a secure, lightning-fast experience on the Solana blockchain, powered
                                by Phantom Wallet.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0"></div>
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE SOLUTION</span>
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
                    <span class="text-white text-center text-3xl font-bold">THE DEMO</span>
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
                            <h2 className="text-3xl mb-4">Solplay vs. Traditional Game Hosting Platforms</h2>
                        </div>

                        <table className="text-white shadow-lg w-[70rem] text-center table-auto h-[20rem]">
                            <thead>
                                <tr>
                                    <th className="border p-2">Feature</th>
                                    <th className="border p-2 bg-purple-700">SolPlay</th>
                                    <th className="border p-2 bg-purple-500">Traditional</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td className="border p-2 bg-gray-500">Fees</td>
                                    <td className="border p-2 bg-green-500">Fee-Free</td>
                                    <td className="border p-2 bg-red-500">Hefty fees (up to 30%)</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 bg-gray-500">Web3 Support</td>
                                    <td className="border p-2 bg-green-600">Yes</td>
                                    <td className="border p-2 bg-red-500">No Web3 Support</td>
                                </tr>
                                <tr>
                                    <td className="border p-2 bg-gray-500">Ownership of In-Game Assets</td>
                                    <td className="border p-2 bg-green-500">Yes</td>
                                    <td className="border p-2 bg-red-500">No</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE DIFFERENCE</span>
                </div>
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
                            <div class="glitch" data-glitch="Now is the perfect Time!">
                                Now is the perfect Time!
                            </div>
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <ul>
                            <li className="my-2">
                                <b></b>SOLPLAY is launching now to meet the surging demand for a Web3 gaming platform on
                                Solana, taking advantage of the rapid expansion of the Solana ecosystem. Our platform
                                empowers both gamers and developers, leveraging the vibrant momentum in the blockchain
                                space to redefine the future of Web3 gaming.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">WHY NOW?</span>
                </div>
            </div>
            <div id="why_us" className="section text-white bg-gray-800 relative">
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
                            <div class="glitch" data-glitch="Why Us?">
                                Why Us?
                            </div>
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <ul>
                            <li className="my-2">
                                <b>We are the Perfect Team</b>: As game developers, we understand the intricacies of the
                                Web3 gaming industry and its current landscape. Our background in game development
                                positions us perfectly to pioneer this project and bring Web3 gaming into mainstream
                                gaming for the betterment of gamers.
                            </li>
                            <li className="my-2">
                                <b>Passionate About the Future</b>: We are passionate about reshaping the future of
                                gaming. Our commitment to innovation, inclusivity, and the empowerment of gamers drives
                                us to create a platform that will revolutionize the gaming experience on Solana.
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">WHY US?</span>
                </div>
            </div>

            <div id="section_three" className="section flex justify-center text-white pt-20 bg-[#5C718F] relative">
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">ROADMAP</span>
                </div>

                <img src={roadmap} alt="solplay_roadmap" className="w-[22rem]  h-[40rem]" />
            </div>

            {/* Add more sections here */}
        </div>
    );
};

export default AboutUs;
