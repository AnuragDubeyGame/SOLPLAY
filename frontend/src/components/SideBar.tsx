import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { API_URL } from '../utils/constant';

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const location = useLocation(); // Get the current route location

  // Fetch the list of game categories
  useEffect(() => {
    fetch(`${API_URL}/api/getAllGames`)
      .then((response) => response.json())
      .then((data: { category: string }[]) => {
        const uniqueCategories = Array.from(new Set(data.map((game) => game.category)));
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const handleUploadGame = () => {
    window.open('/upload-game', '_blank');
  };

  // Conditionally render content based on the current route
  const renderSidebarContent = () => {
    if (location.pathname === '/upload-game') {
      return null;
    }
    return (
      <>
        <div className="text-white font-bold text-2xl mb-4">Categories</div>
        <ul className="space-y-2">
          <li>
            <Link to="/" className="text-white hover:text-gray-400">
              All Games
            </Link>
          </li>
          {categories.map((category) => (
            <li key={category}>
              <Link
                to={`/category/${encodeURIComponent(category)}`} // Encode category name in the URL
                className={`text-white hover:text-gray-400 ${
                  selectedCategory === category ? 'font-bold' : ''
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
          onClick={handleUploadGame}
        >
          Upload Game
        </button>
      </>
    );
  };

  return (
    <div className="bg-gray-900  h-100vh p-4 w-screen-auto">
      {renderSidebarContent()}
    </div>
  );
};

export default Sidebar;
