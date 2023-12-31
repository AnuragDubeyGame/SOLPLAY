import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { API_URL } from '../utils/constant';

const Home = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/api/getAllGames`)
            .then((response) => response.json())
            .then((data) => {
                setGames(data);
            })
            .catch((error) => {
                console.error('Error fetching games:', error);
            });
    }, []);

    const groupedGames = games.reduce((acc, game) => {
        if (!acc[game.category]) {
            acc[game.category] = [];
        }
        acc[game.category].push(game);
        return acc;
    }, {});

    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="p-4 bg-black text-white min-h-screen">
            <div className="p-5">
                <Slider {...settings}>
                    {games.map((game, index) => (
                        <Link to={`/game/${game._id}`} key={index} className="banner-item">
                            <div className="aspect-w-16 aspect-h-9 rounded-lg">
                                <img
                                    src={`data:image/png;base64,${game.banner}`}
                                    alt={game.title}
                                    className="w-full h-80 object-cover filter blur-3xl"
                                />
                            </div>
                            <div className="absolute flex bottom-2 banner-title">
                                <img
                                    src={`data:image/png;base64,${game.banner}`}
                                    alt={game.title}
                                    className="w-auto p-2 rounded-3xl ml-6"
                                />
                                <div>
                                    <h2 className="text-3xl font-bold ml-5 pt-5">{game.title.toUpperCase()}</h2>
                                    <p className="ml-5 font-semibold pt-0 mb-[-1rem] italic capitalize">
                                        by {game.publisher}
                                    </p>
                                    <p
                                        className={`mt-5 ml-4 mb-5  p-1 my-1 font-bold rounded-lg w-40  border-gray-500 border-1.5 ${
                                            game.price === 0 ? 'bg-green-600' : 'bg-black'
                                        } px-2`}
                                    >
                                        {game.price === 0 ? 'Free To Play' : `Price: ${game.price} SOL`}
                                    </p>

                                    <a
                                        href="#_"
                                        className="ml-3 right-0 relative inline-flex items-center justify-center p-4 px-5 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out rounded-full shadow-xl group hover:ring-1 hover:ring-purple-500"
                                    >
                                        <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700"></span>
                                        <span className="absolute  block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-pink-500 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
                                        <span className="relative text-white">See Details</span>
                                    </a>
                                </div>
                            </div>
                        </Link>
                    ))}
                </Slider>
            </div>
            <h1 className="text-3xl font-semibold mb-8 text-center">Games</h1>

            {Object.keys(groupedGames).map((category, index) => (
                <div key={index} className="mb-8">
                    <h2 className="text-xl font-semibold mb-4">{category}</h2>
                    <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                        {groupedGames[category].map((game, index) => (
                            <Link to={`/game/${game._id}`} key={index} className="card relative overflow-hidden">
                                <img src={`data:image/png;base64,${game.banner}`} alt={game.title} />

                                <div className="additional-details">
                                    <div className="absolute top-[-0.8rem] w-full px-5 bg-purple-900 text-white rounded-xl">
                                        <strong>{game.title}</strong>
                                    </div>
                                    <p>
                                        <strong>Price:</strong> {game.price} SOL
                                    </p>
                                    <p>
                                        <strong>Developer:</strong> {game.developer}
                                    </p>
                                    <p>
                                        <strong>Publisher:</strong> {game.publisher}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Home;
