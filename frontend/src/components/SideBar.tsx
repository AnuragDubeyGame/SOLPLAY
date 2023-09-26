import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Fetch the list of game categories
useEffect(() => {
  fetch('http://localhost:5000/api/getAllGames')
    .then((response) => response.json())
    .then((data: { category: string }[]) => {
      const uniqueCategories = Array.from(new Set(data.map((game) => game.category)));
      setCategories(uniqueCategories);
    })
    .catch((error) => {
      console.error('Error fetching categories:', error);
    });
}, []);

  return (
    <div className="bg-gray-900 h-100vh  p-4 w-1/6  overflow-auto pt-20">
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
    </div>
  );
};

export default Sidebar;
