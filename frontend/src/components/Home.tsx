import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Home = () => {
  const [games, setGames] = useState<any[]>([]);
  const [actionGames, setActionGames] = useState<any[]>([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/getAllGames')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setActionGames(data.filter((game: any) => game.category === 'Action'));
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-4 bg-gradient-to-r from-black to-purple-800 pt-20 text-white">
      <h1 className="text-2xl font-bold mb-4">All Games</h1>
      <Slider {...settings}>
        {actionGames.map((game, index) => (
          <div key={index} className="relative max-w-10">
            <Link to={`/game/${game._id}`} className="block"> {/* Link to individual game details */}
              <img
                className="w-full h-80 object-cover"
                src={`data:image/png;base64,${game.banner}`}
                alt={game.title}
              />
              <div className="absolute bottom-0 text-center w-full p-4 bg-black bg-opacity-50">
                <h2 className="font-bold text-2xl mb-2 text-white">{game.title}</h2>
                <p className="text-lg text-white">{game.category}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <div
            key={index}
            className="bg-white w-70 flex-wrap bg-opacity-10 rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200"
          >
            <Link to={`/game/${game._id}`} className="block"> {/* Link to individual game details */}
              <img
                className="w-full h-48 object-cover"
                src={`data:image/png;base64,${game.banner}`}
                alt={game.title}
              />
              <div className="p-4">
                <h2 className="font-bold text-xl mb-2">{game.title}</h2>
                <p className="text-gray-300 text-base">{game.description}</p>
                <p className="mt-2">
                  <strong>Developer:</strong> {game.developer}
                </p>
                <p>
                  <strong>Publisher:</strong> {game.publisher}
                </p>
                <p>
                  <strong>Release Date:</strong> {game.releaseDate}
                </p>
                <p>
                  <strong>Price:</strong> {game.price}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
