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
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter"
                    style={{
                        backgroundImage: `url(${ABOUTbg})`,
                    }}
                ></div>
                <img src={solPlay} className="w-[40rem] logo-fade-in" alt="solPlay_logo" />
                <p className="text-white text-xl mt-4 italic font-semibold slogan-slide-in">
                    Unlocking Web3 Gaming for Millions
                </p>
                <div className="scroll-button mb-[60px]">
                    <a href="#section_two">
                        <span className="text-white text-3xl">
                            <i className="fas fa-arrow-down"></i>
                        </span>
                    </a>
                </div>
            </div>

            <div id="section_two" className="section text-white bg-gray-800 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b text-white font-bold">
                    <img src={game_2} alt="game_1" className="absolute w-[25rem] left-32 flying-img" />

                    <div className="ml-[40rem] mr-[5rem] text-left grid grid-cols-1 gap-2">
                        <div class="glitch-wrapper">
                            <div class="glitch" data-glitch="WEB3 GAMING - THE PROBLEMS">
                                <h1>
                                    WEB3 GAMING - THE PROBLEMS
                                </h1>
                            </div>
                        </div>

                        <div className="bg-gray-500-enter-right p-1 w-auto pl-2 text-xl leading-relaxed"></div>

                        <div className="grid grid-cols-1 gap-3">
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h2 className="text-2xl font-bold mb-2">Accessibility</h2>
                                <p>Lack of awareness and centralized hubs makes it hard for gamers to find and explore web3 games.</p>
                            </div>
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h2 className="text-2xl font-bold mb-2">Complexity</h2>
                                <p>Many gamers find blockchain gaming overly complex, from setting up wallets to understanding blockchain technology.</p>
                            </div>
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h2 className="text-2xl font-bold mb-2">Usability</h2>
                                <p>User interfaces of existing blockchain gaming platforms are not user-friendly.</p>
                            </div>
                        </div>
                    </div>

                    <div className="scroll-button mb-[60px]">
                        <a href="#section_three">
                            <span className="text-white text-3xl">
                                <i className="fas fa-arrow-down"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE PROBLEM</span>
                </div>
            </div>





            <div id="section_three" className="section text-white bg-gray-800 relative">
                <div
                    className="absolute z-[-1] inset-0 bg-center bg-cover filter blur-2xl"
                    style={{
                        backgroundImage: `url('')`,
                    }}
                ></div>

                <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-b text-white font-bold">
                    <img src={game_4} alt="game_1" className="absolute w-[25rem] left-32 flying-img" />

                    <div className="ml-[40rem] mr-[5rem] text-left">
                        <p className="text-4xl">Introducing</p>
                        <div className="glitch-solplay text-center" data-glitch="SOLPLAY">
                            &nbsp;
                        </div>
                        <div className="bg-gray-500-enter-right p-4 w-auto pl-4 text-xl leading-relaxed"></div>
                        <div className="grid grid-cols-1 gap-8 mt-8">
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h2 className="text-2xl font-bold">SOLPLAY: Gateway to Web3 Gaming</h2>
                                SOLPLAY is the first-of-its-kind Web3 game hosting platform on the Solana blockchain, simplifying the transition for average gamers into the world of Web3.
                            </div>
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h2 className="text-2xl font-bold">Addressing a Critical Need</h2>
                                In a rapidly expanding blockchain gaming market, there's a glaring gap in platforms that cater to gamers. SOLPLAY fills this void by offering a hub for discovering and playing Web3 games.
                            </div>
                            <div className="bg-purple-800 p-4 rounded-lg">
                                <h2 className="text-2xl font-bold">Simplifying Web3 Adoption</h2>
                                Our user-friendly interface and straightforward approach help alleviate the complexity associated with Web3 gaming, making it accessible to a broader audience.
                            </div>
                        </div>
                    </div>
                    <div className="scroll-button mb-[60px]">
                        <a href="#section_four">
                            <span className="text-white text-3xl">
                                <i className="fas fa-arrow-down"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div className="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0"></div>
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE SOLUTION</span>
                </div>
            </div>








            <div id="section_four" className="section text-white bg-gray-800 relative">
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
                <div className="scroll-button mb-[60px]">
                    <a href="#section_five">
                        <span className="text-white text-3xl">
                            <i className="fas fa-arrow-down"></i>
                        </span>
                    </a>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE DEMO</span>
                </div>
            </div>












            <div id="section_five" className="section text-white bg-gray-800 relative">
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
                        <div className="flex justify-center items-center">
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
                <div className="scroll-button mb-[60px]">
                    <a href="#section_six">
                        <span className="text-white text-3xl">
                            <i className="fas fa-arrow-down"></i>
                        </span>
                    </a>
                </div>
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE DIFFERENCE</span>
                </div>
            </div>








            <div id="section_six" className="section text-white bg-gray-800 relative">
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
                    <div className="scroll-button mb-[60px]">
                        <a href="#section_seven">
                            <span className="text-white text-3xl">
                                <i className="fas fa-arrow-down"></i>
                            </span>
                        </a>
                    </div>
                </div>

                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">WHY NOW?</span>
                </div>
            </div>
            <div id="section_seven" className="section text-white bg-gray-800 relative">
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
                                <b className="bg-purple-800 px-2  rounded-lg ">We are the Perfect Team</b>: As game developers, we understand the intricacies of the
                                Web3 gaming industry and its current landscape. Our background in game development
                                positions us perfectly to pioneer this project and bring Web3 gaming into mainstream
                                gaming for the betterment of gamers.
                            </li>
                            <li className="my-2">
                                <b className="bg-purple-800 px-2  rounded-lg ">Passionate About the Future</b>: We are passionate about reshaping the future of
                                gaming. Our commitment to innovation, inclusivity, and the empowerment of gamers drives
                                us to create a platform that will revolutionize the gaming experience on Solana.
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="scroll-button mb-[60px]">
                    <a href="#section_eight">
                        <span className="text-white text-3xl">
                            <i className="fas fa-arrow-down"></i>
                        </span>
                    </a>
                </div>
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">WHY US?</span>
                </div>
            </div>

            <div id="section_eight" className="section flex justify-center text-white pt-20 bg-[#5C718F] relative">
                <div className="scroll-button mb-[60px]">
                    <a href="#section_nine">
                        <span className="text-white text-3xl">
                            <i className="fas fa-arrow-down"></i>
                        </span>
                    </a>
                </div>
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">ROADMAP</span>
                </div>

                <img src={roadmap} alt="solplay_roadmap" className="w-[30rem]  h-[50rem]" />
            </div>
            <div id="section_nine" className="section text-white pt-20 bg-gray-800 relative">
                <div class="absolute bg-gradient-to-r from-purple-900 to-green-500 w-screen h-16 top-0 flex justify-center items-center">
                    <span class="text-white text-center text-3xl font-bold">THE TEAM</span>
                </div>

                <div className="flex items-center h-[100%] justify-center grid-cols-1 md:grid-cols-2 gap-6 p-4">
                    <div className="bg-purple-600 w-[40%] rounded-lg p-4 flex flex-col items-center text-center">
                        <img
                            src="https://avatars.githubusercontent.com/u/124233582?v=4"
                            alt="Team Member"
                            className="rounded-full w-24 h-24 border-4 border-white"
                        />
                        <p className="text-white font-bold mt-2">Anurag Dubey</p>
                        <p className="text-gray-300">Game Developer & Blockchain Enthusiast</p>
                        <p>
                            I, the Team Leader, bring over three years of game development experience to our team. With
                            a strong passion for blockchain technology and its potential, I'm on a mission to
                            revolutionize the Web3 gaming industry. By combining technical expertise in Unity with a
                            forward-thinking approach, I create innovative gaming experiences that leverage the power of
                            blockchain.
                        </p>
                    </div>
                    <div className="bg-purple-600 w-[40%] rounded-lg p-4 flex flex-col items-center text-center">
                        <img
                            src="https://pbs.twimg.com/profile_images/1484528690398924805/Xg58F8fd_400x400.jpg"
                            alt="Team Member"
                            className="rounded-full w-24 h-24 border-4 border-white"
                        />
                        <p className="text-white font-bold mt-2">Saurabh Shukla</p>
                        <p className="text-gray-300">Frontend Engineer</p>
                        <p>
                            Saurabh Shukla is a frontend engineer with two years of experience in crafting user-centric
                            interfaces. His attention to detail and design sensibility are essential in ensuring that
                            the user experience on our platform is seamless and engaging. He is committed to creating an
                            intuitive and visually appealing interface that enhances the accessibility of Web3 gaming
                            through SOLPLAY.
                        </p>
                    </div>
                </div>
            </div>

            {/* Add more sections here */}
        </div>
    );
};

export default AboutUs;
