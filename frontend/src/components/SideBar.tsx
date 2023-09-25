import React from 'react';
import { Link } from 'react-router-dom';

const SideBar = () => {
  return (
    <div className="bg-gray-900 h-screen w-1/4 p-4">
        
      <div className="text-white font-bold text-2xl mb-4">Futuristic Sidebar</div>

      <ul className="space-y-2">
        <li>
          <Link to="/" className="text-white hover:text-gray-400">Home</Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-400">About</Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-400">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
