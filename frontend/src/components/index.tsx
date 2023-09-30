import React, { FC, Suspense } from 'react';
import Context from './Context';
import SideBar from './SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from '../utils/routes';
import Header from '../components/Header';
import LoadingSpinner from '../LoadingSpinner';
import RightSidebar from '../components/RightSidebar';

require('../components/Styles/Home.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const Index: FC = () => {
  return (
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Context>
          <div className="fixed top-0 left-0 right-0 z-50">
            <Header />
          </div>
                </Context>
          <Router>
            <div className="flex">
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
                      </Suspense>
    </>
  );
};

export default Index;