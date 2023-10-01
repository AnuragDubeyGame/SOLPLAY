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
    <div className="bg-black bg-opacity-90 text-white min-h-screen pt-20 relative">
      <div className="max-w-screen-lg mx-auto">
        {/* Banner Image */}
        <div
          className="w-80 h-64 mx-auto" // 315x250 size, centered horizontally
          style={{
            backgroundImage: `url(data:image/png;base64,${game.banner})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        ></div>
        {/* End of Banner Image */}
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">{game.title}</h1>

          {/* Description Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Description</h2>
            <p className="text-gray-300">{game.description}</p>
          </div>

          {/* Developer Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Developer</h2>
            <p className="text-gray-300">{game.developer}</p>
          </div>

          {/* Publisher Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Publisher</h2>
            <p className="text-gray-300">{game.publisher}</p>
          </div>

          {/* Release Date Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Release Date</h2>
            <p className="text-gray-300">{game.releaseDate}</p>
          </div>

          {/* Price Section */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold">Price</h2>
            <p className="text-gray-300">${game.price}</p>
          </div>

          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
