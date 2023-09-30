import React, { Suspense, useEffect, useState } from 'react';
import Content from './Content';
import Context from './Context';

const glossyHeaderStyles = {
  position: 'relative', // Change from 'sticky' to 'relative'
  background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9))', // Non-linear gradient
  boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.3)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '5px',
  color: 'white',
  display: 'flex', // Add this line to enable flex layout
  alignItems: 'center', // Vertically align items in the center
  height: '7vh',
};

const logoStyles = {
  width: '180px',
  height: 'auto',
  marginRight: '10px', // Add a small right margin
  position: 'absolute',
  left: '5px',
};


const labelStyles = {
  flex: '1', // Allow the label to expand and take up available space
  textAlign: 'right', // Align the label to the right
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
};

const buttonStyles = {
  marginLeft: 'auto',
  marginRight: '10px',
  position: 'absolute',
  right: '190px',
  top: '50%',
  transform: 'translateY(-50%)',
  backgroundColor: 'rgb(85, 60, 154)', // Set default background color
  border: 'none', // Remove the border
  borderRadius: '5px', // Add some border radius for a slightly rounded look
  padding: '10px 15px',
  color: 'white',
  transition: 'background-color 0.3s ease',
};


const contentStyles = {
  marginLeft: '240px',
};

// Add hover styles
const buttonHoverStyles = {
  backgroundColor: '#4a90e2', // Change background color on hover
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Use window.innerWidth to check the screen width and set isMobile accordingly
    const checkIsMobile = () => {
      if (window.innerWidth <= 700) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    // Initial check
    checkIsMobile();

    // Add event listener to handle window resize
    window.addEventListener('resize', checkIsMobile);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handleUploadGame = () => {
    window.open('/upload-game', '_blank');
  };

  // Merge the styles based on hover state
  const combinedButtonStyles = {
    ...buttonStyles,
    ...(isHovered ? buttonHoverStyles : {}),
  };

  return (
    <header style={glossyHeaderStyles}>
      <div className="container mx-auto text-white">
        <Suspense fallback={<div>loading...</div>}>
          <Context>
            {isMobile ? (
              <div>
                <p>Please open it in desktop.</p>
              </div>
            ) : (
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <img
                  src={require("../assets/SOLPLAYBANNER.png")}
                  alt="Logo"
                  style={logoStyles}
                />
                <span style={labelStyles}>
                  <button
                    style={combinedButtonStyles}
                    onMouseEnter={() => setIsHovered(true)} // Handle mouse enter event
                    onMouseLeave={() => setIsHovered(false)} // Handle mouse leave event
                    onClick={handleUploadGame}
                  >
                    Upload Game
                  </button>
                </span>
                <Content style={contentStyles} />
              </div>
            )}
          </Context>
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
