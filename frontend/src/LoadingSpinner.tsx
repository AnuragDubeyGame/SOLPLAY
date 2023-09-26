import React from 'react';
import spinnerImage from './assets/loading-animation.gif'; // replace with your spinner image path

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-screen bg-gradient-to-r from-black to-purple-800 min-h-screen">
    <img
      src={spinnerImage}
      alt="Loading..."
      className="w-15 h-15 rounded-full"
    />
  </div>
);

export default LoadingSpinner;