import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Styles/Home.css'; // Create a CSS file for your animations

// Add the CSS code here
import './Home.css'; // Replace with the actual path to your CSS file

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/getAllGames')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, []);

  // Group games by category
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
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="p-4 bg-black text-white min-h-screen">
     <h1 className="text-3xl font-semibold mb-8 text-center">Games</h1>

      {Object.keys(groupedGames).map((category, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold mb-4">{category}</h2>
          <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {groupedGames[category].map((game, index) => (
              <CSSTransition key={index} classNames="slide" timeout={500}>
                <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform hover:transform hover:scale-105 duration-200">
                  <Link to={`/game/${game._id}`} className="block">
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        className="w-full h-full object-cover"
                        src={`data:image/png;base64,${game.banner}`}
                        alt={game.title}
                      />
                    </div>
                    <div className="p-4">
                      <h2 className="font-semibold text-xl mb-2">{game.title}</h2>
                      <div className="details-container w-full h-48 overflow-hidden">
                        <p className="text-gray-400 text-base line-clamp-2">
                          {truncateText(game.description, 100)}
                        </p>
                        <p className="mt-2 text-gray-300">
                          <strong>Developer:</strong> {game.developer}
                        </p>
                        <p className="text-gray-300">
                          <strong>Publisher:</strong> {game.publisher}
                        </p>
                        <p className="text-gray-300">
                          <strong>Release Date:</strong> {game.releaseDate}
                        </p>
                        <p className="text-gray-300">
                          <strong>Price:</strong> {game.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      ))}
    </div>
  );
};

export default Home;
