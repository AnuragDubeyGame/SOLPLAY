import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../LoadingSpinner';
import SendTenLamportToRandomAddress from './sendSol';
import { useWallet } from '@solana/wallet-adapter-react';
import BuyGame from './BuyGame';
import Context from './Context';
const GameDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [game, setGame] = useState<any | null>(null);
    const [showPopup, setShowPopup] = useState(false);
    const handlePlayButtonClick = () => {
        const publicKey = localStorage.getItem('publicKey');
        if (publicKey) {
            const apiUrl = `http://localhost:5000/api/playgame/${id}/${publicKey}`;
            if (game.price === 0) {
                window.open(apiUrl, '_blank');
            } else {
                // Open the popup
                setShowPopup(true);
                
            }
        }
    };

    useEffect(() => {
        fetch(`http://localhost:5000/api/getGame/${id}`)
            .then((response) => response.json())
            .then((data) => {
                setGame(data);
            })
            .catch((error) => {
                console.error('Error fetching game details:', error);
            });
    }, [id]);

    if (!game) {
        return (
            <div>
                <LoadingSpinner />
            </div>
        );
    }


    return (
        <div className="bg-gray-800 text-white min-h-screen  relative">
            <div className="max-w-screen-lg mx-auto">
                {/* Banner Image */}
                <div className="relative w-full h-96 mb-6">
                    {/* Blurred Background */}
                    <div
                        className="absolute inset-0 bg-center bg-cover filter  blur-3xl"
                        style={{
                            backgroundImage: `url(data:image/png;base64,${game.banner})`,
                        }}
                    ></div>
                    {/* Uncropped Image */}
                    <div className="flex">
                        <img
                            src={`data:image/png;base64,${game.banner}`}
                            alt={game.title}
                            className="top-48  object-cover rounded-2xl  relative inset-0"
                        />
                        <div className="w-full mr-24">
                            <h1 className="font-bold ml-3 text-3xl top-48 object-cover text-gray-200  bg-gray-900 bg-opacity-40 p-3 w-full rounded-lg  relative inset-0">
                                {game.title.toUpperCase()}
                            </h1>
                            <p
                                className="bg-opacity-10 font-bold top-48 ml-3 relative"
                                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
                            >
                                By: {game.developer}
                            </p>

                            <p
                                className="bg-opacity-10 font-bold top-48 ml-3 relative"
                                style={{ textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)' }}
                            >
                                Published by: {game.publisher}
                            </p>
                            <p
                                className={`top-48 p-1 my-1 font-bold ml-3 w-40 relative inset-0 rounded-lg border-gray-500 border-1.5 ${
                                    game.price === 0 ? 'bg-green-600' : 'bg-black'
                                } px-2`}
                            >
                                {game.price === 0 ? 'Free To Play' : `Price: ${game.price} SOL`}
                            </p>
                        </div>
                    </div>
                    <button
                        className="absolute bottom-0 right-20 w-40 text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                        onClick={handlePlayButtonClick} // Attach the click event handler
                    >
                        Play
                    </button>
                </div>

                {/* Game Details */}
                <div className="pt-32">
                    {/* Description Section */}
                    <div className="mt-4 bg-gray-900 p-4 rounded">
                        <h2 className="text-xl font-semibold">Description</h2>
                        <p className="text-gray-300">{game.description}</p>
                    </div>

                    {/* Release Date Section */}
                    <div className="mt-4 bg-gray-900 p-4 rounded">
                        <h2 className="text-xl font-semibold">Release Date</h2>
                        <p className="text-gray-300">{game.releaseDate}</p>
                    </div>

                    {showPopup && (
                        <Context>
                        <SendTenLamportToRandomAddress
                            fromPublicKey={localStorage.getItem('publicKey')}
                            toPublicKey={game.publicKey}
                            amount={game.price}
                            username=""
                            purchasedGameId={game._id}
                        />
                        </Context>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GameDetails;
