import React from 'react';
import gifImage from '../assets/vertical-banner.gif'; // replace with your gif image path
import gifImage2 from '../assets/vertical-banner-2.gif'; // replace with your gif image path

const RightSidebar = () => {
  return (
    <div className="bg-gray-900 h-100vh w-1/4  overflow-auto">
      <img src={gifImage} alt="Sidebar GIF" className="w-full h-auto" />
      <img src={gifImage2} alt="Sidebar GIF" className="w-full h-auto" />
    </div>
  );
};

export default RightSidebar;