import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const GameDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [game, setGame] = useState<any | null>(null);

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
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4 w-full bg-blue-900 min-h-screen text-white pt-20">
      <div className="max-w-screen-lg mx-auto">
        <div className="bg-black rounded-lg overflow-hidden shadow-lg">
          <img
            className="w-full h-72 object-cover"
            src={`data:image/png;base64,${game.banner}`}
            alt={game.title}
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold mb-4 text-white">{game.title}</h1>
            <p className="text-gray-400 text-base">{game.description}</p>
            <div className="mt-4">
              <p className="text-gray-300">
                <strong>Developer:</strong> {game.developer}
              </p>
              <p className="text-gray-300">
                <strong>Publisher:</strong> {game.publisher}
              </p>
              <p className="text-gray-300">
                <strong>Release Date:</strong> {game.releaseDate}
              </p>
              <p className="text-gray-300">
                <strong>Price:</strong> ${game.price}
              </p>
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
