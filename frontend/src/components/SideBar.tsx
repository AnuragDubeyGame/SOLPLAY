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
    <div className="bg-gray-900 h-100vh p-4 w-70">
      <div className="text-white font-bold text-2xl mb-4">Categories</div>
      <ul className="space-y-2">
        <li>
          <Link
            to="/"
            className={`text-white hover:text-gray-400 ${
              isCategorySelected('Home') ? 'font-bold text-xl underline' : 'text-xl'
            }`}
            onClick={() => setSelectedCategory('Home')}
          >
            Home
          </Link>
        </li>
        {categories.map((category) => (
          <li key={category}>
            <Link
              to={`/category/${encodeURIComponent(category)}`} // Encode category name in the URL
              className={`text-white hover:text-gray-400 ${
                isCategorySelected(category) ? 'font-bold text-xl underline' : 'text-xl'
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
