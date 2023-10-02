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

  // Function to check if a category is selected
  const isCategorySelected = (category: string) => {
    return category === selectedCategory || (category === 'Home' && location.pathname === '/');
  };

  return (
    <div className="bg-gray-900 h-screen p-4 w-70">
      <div className="text-white font-bold text-2xl mb-4">Categories</div>
      <ul className="space-y-2">
        <li>
        <li>
        <Link
    to="/"
    className={`text-white hover:text-gray-400 transition-all ease-in-out duration-300 ${
      isCategorySelected('Home')
        ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700 rounded-lg text-2xl p-2'
        : 'rounded-lg text-2xl p-2'
    }`}
    onClick={() => setSelectedCategory('Home')}
  >
    Home
</Link>
</li>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/category/${encodeURIComponent(category)}`} // Encode category name in the URL
              className={`text-white rounded-lg w-full hover:text-gray-400 p-2 transition-all ease-in-out duration-300 ${
                isCategorySelected(category) ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-700' : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
