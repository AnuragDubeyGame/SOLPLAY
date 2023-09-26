import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CategoryGames = () => {
  const { category } = useParams<{ category: string }>();
  const [games, setGames] = useState<any[]>([]);

  useEffect(() => {
    fetch(`http://localhost:5000/api/getGamesByCategory?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, [category]);

  return (
    <div className="p-4 bg-gray-800 min-h-screen text-white pt-20">
      <h1 className="text-2xl font-bold mb-4">{category} Games</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <div key={index} className="bg-black rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200 min-w-0">
            <img className="w-full h-48 object-cover" src={'https://static.vecteezy.com/system/resources/thumbnails/013/381/423/small/game-console-joystick-glowing-neon-buttons-signs-bright-signboard-light-banner-easy-to-edit-illustration-vector.jpg'} alt={game.title} />
            <div className="p-0">
              <h2 className="font-bold text-xl mb-2 bg-purple-800 text-white p-4">{game.title}</h2>
              <p className="text-gray-300 text-base">{game.description}</p>
              <p className="mt-2"><strong>Developer:</strong> {game.developer}</p>
              <p><strong>Publisher:</strong> {game.publisher}</p>
              <p><strong>Release Date:</strong> {game.releaseDate}</p>
              <p><strong>Price:</strong> {game.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGames;