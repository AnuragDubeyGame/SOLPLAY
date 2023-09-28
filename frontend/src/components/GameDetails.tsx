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
    <div className="p-4 bg-gray-800 min-h-screen text-white pt-20">
      <h1 className="text-2xl font-bold mb-4">{game.title} Details</h1>
      <div className="bg-black rounded overflow-hidden shadow-lg min-w-0">
        <img
          className="w-full h-48 object-cover"
          src={`data:image/png;base64,${game.banner}`}
          alt={game.title}
        />
        <div className="p-4">
          <h2 className="font-bold text-xl mb-2 bg-purple-800 text-white p-4">{game.title}</h2>
          <p className="text-gray-300 text-base">{game.description}</p>
          <p className="mt-2"><strong>Developer:</strong> {game.developer}</p>
          <p><strong>Publisher:</strong> {game.publisher}</p>
          <p><strong>Release Date:</strong> {game.releaseDate}</p>
          <p><strong>Price:</strong> {game.price}</p>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
