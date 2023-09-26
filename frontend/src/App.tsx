import React, { FC, Suspense  } from 'react';
import Context from './components/Context'; // Import the Context component
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import { routes } from './utils/routes';
import Header from './components/Header';
import LoadingSpinner from './LoadingSpinner'; // Import the LoadingSpinner component
import RightSidebar from './components/RightSidebar';


require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {

      return (
        <>
          <Suspense fallback={<LoadingSpinner />}>
            <Context>
            <div className="fixed top-0 left-0 right-0 z-50">
              <Header />
              </div>
              <Router>
                <div className="flex ">
                  <SideBar />
                  <div className="flex-grow overflow-auto">
                    <Routes>
                      {routes.map((route, index) => (
                        <Route
                          key={index}
                          path={route.path}
                          element={route.element}
                        />
                      ))}
                    </Routes>
                  </div>
                  {/* <RightSidebar /> */}
                </div>
              </Router>
            </Context>
          </Suspense>
        </>
      );
    
};

export default App;
