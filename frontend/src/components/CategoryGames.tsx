import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './Styles/CategoryGames.css'; // Create a CSS file for your animations

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
    <div className="p-4 bg-gray-800 min-h-screen text-white pt-20 w-full">
      <h1 className="text-2xl font-bold mb-4">{propCategory} Games</h1>
      <TransitionGroup className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {games.map((game, index) => (
          <CSSTransition key={index} classNames="slide" timeout={500}>
            <div className="bg-black rounded overflow-hidden shadow-lg min-w-0">
              <Link to={`/game/${game._id}`} className="block">
              <img
                className="w-full h-48 object-cover"
                src={`data:image/png;base64,${game.banner}`}
                alt={game.title}
              />
              <div className="p-0">
                <h2 className="font-bold text-xl mb-2 bg-purple-800 text-white p-4">{game.title}</h2>
                <p className="text-gray-300 text-base">
                  {truncateText(game.description, 100)} {/* Adjust the maximum length as needed */}
                </p>
                <p className="mt-2"><strong>Developer:</strong> {game.developer}</p>
                <p><strong>Publisher:</strong> {game.publisher}</p>
                <p><strong>Release Date:</strong> {game.releaseDate}</p>
                <p><strong>Price:</strong> {game.price}</p>
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
