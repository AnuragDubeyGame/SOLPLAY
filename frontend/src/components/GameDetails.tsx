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
    <div className="bg-gray-900 text-white min-h-screen pt-20 relative">
      <div className="max-w-screen-lg mx-auto p-6">
        {/* Banner Image */}
        <div className="w-full h-96 mb-6">
          <img
            src={`data:image/png;base64,${game.banner}`}
            alt={game.title}
            className="w-full h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Game Details */}
        <div>
          <h1 className="text-3xl font-semibold bg-gray-800 p-2 rounded">
            {game.title}
          </h1>

          {/* Description Section */}
          <div className="mt-4 bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-300">{game.description}</p>
          </div>

          {/* Developer Section */}
          <div className="mt-4 bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Developer</h2>
            <p className="text-gray-300">{game.developer}</p>
          </div>

          {/* Publisher Section */}
          <div className="mt-4 bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Publisher</h2>
            <p className="text-gray-300">{game.publisher}</p>
          </div>

          {/* Release Date Section */}
          <div className="mt-4 bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Release Date</h2>
            <p className="text-gray-300">{game.releaseDate}</p>
          </div>

          {/* Price Section */}
          <div className="mt-4 bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-semibold">Price</h2>
            <p className="text-gray-300">${game.price}</p>
          </div>

          <button className="mt-6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
