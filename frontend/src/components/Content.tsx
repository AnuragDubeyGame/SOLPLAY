import React, { FC, useState } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Content: FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Define the default and hover styles
  const defaultStyles = {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    backgroundColor: isHovered ? '#4a90e2' : '#553c9a', // Change the background color on hover
    transition: 'background-color 0.3s ease', // Add a transition effect
  };

  return (
    <div className="App">
      <div style={defaultStyles} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <WalletMultiButton className="wallet-button" />
      </div>
    </div>
  );
};

export default Content;
