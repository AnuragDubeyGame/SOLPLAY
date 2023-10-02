import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Styles/CategoryGames.css'; // Create a CSS file for your animations
import { API_URL } from '../utils/constant';

interface Game {
  _id: string;
  banner: string;
  title: string;
  description: string;
  developer: string;
  publisher: string;
  releaseDate: string;
  price: string;
}

interface CategoryGamesProps {
  category: string;
}

const truncateText = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  return text.substring(0, maxLength) + '...';
};

const CategoryGames: React.FC<CategoryGamesProps> = ({ category: propCategory }) => {
  const { category } = useParams<{ category: string }>();
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/api/getGamesByCategory?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
      })
      .catch((error) => {
        console.error('Error fetching games:', error);
      });
  }, [category]);

  return (
    <div className="p-4 bg-black text-white min-h-screen">
      <h1 className="text-2xl font-bold mb-4">{propCategory} Games</h1>
      <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <CSSTransition key={index} classNames="slide" timeout={500}>
            <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-200">
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
                  <p className="text-gray-400 text-base line-clamp-2">
                    {truncateText(game.description, 100)} {/* Adjust the maximum length as needed */}
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
              </Link>
            </div>
          </CSSTransition>
        ))}
      </TransitionGroup>
    </div>
  );
};

export default CategoryGames;
