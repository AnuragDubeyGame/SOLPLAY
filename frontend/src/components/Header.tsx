import React, { Suspense, useEffect, useState } from 'react';
import Content from './Content';
import Context from './Context';

const glossyHeaderStyles = {
  position: 'relative',
  background: 'linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.75))',
  boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.3)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '5px',
  color: 'white',
  height: '7vh',
};

const logoStyles = {
  width: '180px',
  height: 'auto',
  marginRight: '5px',
  position: 'absolute',
  top: '8px',
  left: '0px',
};

const labelStyles = {
  position: 'absolute',
  top: '20px',
  right: '200px', // Align the label to the right with a margin
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
};

const contentStyles = {
  marginLeft: '240px',
};

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Use window.innerWidth to check the screen width and set isMobile accordingly
    const checkIsMobile = () => {
      if (window.innerWidth <= 500) {
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
              <div style={{ display: 'relative' }}>
                <img
                  src={require("../assets/SOLPLAYBANNER.png")}
                  alt="Logo"
                  style={logoStyles}
                />
                <span style={labelStyles}>AboutUs</span>
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