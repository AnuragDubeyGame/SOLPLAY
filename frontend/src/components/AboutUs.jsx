import React from 'react';

const AboutUs = () => {
    return (
        <>
            <div className="bg-gray-900 pt-10 italic    ">
                <div className="container mx-auto px-32 bg-gr">
                    <div className="bg-gradient-to-r border-2 border-gray-500 to-purple-900 from-gray-800 bg-gray-800 text-white p-6 rounded-lg shadow-md ">
                        <h1 className="text-4xl font-semibold mb-6">About SOLPLAY</h1>
                        <p className="text-lg leading-relaxed">
                            Welcome to SOLPLAY, your ultimate destination for immersive gaming experiences on the Solana
                            blockchain. We are passionate about <u>revolutionizing the gaming industry </u>by leveraging the
                            power of Web3 technology. Our mission is to provide a cutting-edge platform where game
                            developers can showcase their creations, and gamers can dive into a world of decentralized
                            gaming.
                        </p>
                        <p className="text-lg leading-relaxed mt-4">
                            At SOLPLAY, we're committed to making gaming accessible and enjoyable for all.<u> Developers
                            can easily publish their games, whether they're free or offered at a nominal cost in Solana
                            tokens.</u> Gamers can explore a vast array of games, make transactions securely with the
                            Phantom wallet, and dive into a realm where ownership and creativity reign supreme.
                        </p>
                    </div>
                </div>
                <div className="container mx-auto px-32 mt-10">
                    <div className="bg-gradient-to-r bg-gray-800 border-2  border-gray-500 text-white p-6 rounded-lg shadow-md ">
                        <div className="pr-4">
                        <p className=" flex justify-center items-center bg-gray-900 text-2xl leading-relaxed border-2  border-gray-500 p-2 mx-1 my-5 rounded-lg mt-2 font-semibold">
                                <strong>SOLPLAY Hyperdrive </strong>
                            </p>
                            <p className="text-lg leading-relaxed mt-2 font-semibold">
                                <strong>BACKGROUND</strong>
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Team Name:<u> SOLUX</u></li>
                                <li>Team Members: <u><a href='https://github.com/AnuragDubeyGame'> Anurag Dubey</a></u> , <a href='https://github.com/srshukla2001'><u>Saurabh Shukla</u></a></li>
                                <li>
                                    Team Background: Our team consists of passionate gamers and blockchain enthusiasts
                                    with a shared goal of revolutionizing Web3 gaming. We're driven by a vision to make
                                    gaming accessible and rewarding for millions on the Solana blockchain.
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-2 font-semibold">
                                <strong>Functionality:</strong>
                            </p>
                            <ul className="list-disc pl-6">
                                <li>Project Name: SOLPLAY</li>
                                <li>
                                    Code Quality: SOLPLAY's code is well-structured, efficient, and optimized for
                                    Solana's high-performance environment. We have thoroughly tested and debugged the
                                    code to ensure a seamless gaming experience.
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-2 font-semibold">
                                <strong>Potential Impact:</strong>
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Total Addressable Market: With the explosive growth of Web3 gaming, our project
                                    targets a vast and ever-expanding market of gamers and developers.
                                </li>
                                <li>
                                    Impact on Solana Ecosystem: SOLPLAY aims to significantly enhance the Solana
                                    ecosystem by fostering innovation, attracting new users, and facilitating
                                    decentralized gaming experiences.
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-2 font-semibold">
                                <strong>Novelty:</strong>
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    SOLPLAY Concept: Our project introduces novel features and capabilities to Web3
                                    gaming, such as zero fees, real-time collaboration, and integration with Phantom
                                    Wallet, setting it apart from traditional gaming platforms.
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-2 font-semibold">
                                <strong>User Experience:</strong>
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Leveraging Solana: SOLPLAY leverages Solana's high-speed blockchain to deliver
                                    lightning-fast transactions and an unparalleled gaming experience for users. The
                                    integration with Phantom Wallet ensures secure and convenient asset management.
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-2 font-semibold">
                                <strong>Ecosystem Friendliness:</strong>
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Open-Source: SOLPLAY is committed to open-source principles, with our codebase
                                    publicly available on GitHub. We actively engage with the Solana community to foster
                                    collaboration and compatibility with other Solana primitives.
                                </li>
                            </ul>
                            <p className="text-lg leading-relaxed mt-2 font-semibold">
                                <strong>Business Plan:</strong>
                            </p>
                            <ul className="list-disc pl-6">
                                <li>
                                    Viable Business Model: SOLPLAY's business model is built on multiple revenue
                                    streams, including platform fees, premium subscriptions, NFT sales, advertisements,
                                    data licensing, and marketplace fees. We aim to sustain our operations while
                                    providing value to developers and gamers.
                                </li>
                                <li>
                                    Holistic Presentation: Our project presentation (slides or video) provides a
                                    comprehensive view of SOLPLAY's vision, functionality, and potential impact on the
                                    Web3 gaming industry. We highlight our commitment to the Solana ecosystem and our
                                    strategy for long-term success.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8 flex items-center justify-between">
                        <div className="w-1/2 pl-4">
                            <img src={require('../assets/solplay_icon.png')} alt="Logo" />
                        </div>
                        <p className="text-lg leading-relaxed text-white">
                            Our vision is to foster a vibrant community of gamers and developers who share a passion for
                            decentralized gaming. SOLPLAY is not just a platform; it's a movement towards a more open,
                            transparent, and decentralized gaming ecosystem. We invite you to embark on this exciting
                            journey with us and experience gaming in a way you've never imagined before. Together, let's
                            play, create, and redefine the rules of gaming with SOLPLAY.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutUs;
