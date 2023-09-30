import React, { FC, Suspense, useEffect, useState } from 'react';
import Context from './components/Context';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import Header from './components/Header';
import LoadingSpinner from './LoadingSpinner';
import RightSidebar from './components/RightSidebar';

require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

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

  return (
<>
  <Suspense fallback={<LoadingSpinner />}>
    <Context>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
    </Context>
    <Router>
      {isMobile ? (
        <div
          className="flex justify-center items-center h-screen"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}
        >
          <div className="text-center text-white">
            <p>Please use a larger screen for the best experience.</p>
          </div>
        </div>
      ) : (
        // Render the regular content for desktop screens
        <div className="flex">
          <SideBar />
          <div className="flex-grow overflow-auto">
            <Routes>
              {routes.map((route, index) => (
                <Route key={index} path={route.path} element={route.element} />
              ))}
            </Routes>
          </div>
          {/* <RightSidebar /> */}
        </div>
      )}
    </Router>
  </Suspense>
</>

)};

export default App;
