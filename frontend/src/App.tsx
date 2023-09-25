import React, { FC, Suspense  } from 'react';
import Context from './components/Context'; // Import the Context component
import Content from './components/Content'; // Import the Content component
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter
import { routes } from './utils/routes';


require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    const SuspenseTrigger = () => {
        throw new Promise(() => {});
      };
    return (
        <>
        <Suspense fallback={<div>loading...</div>}>
        <Context> 
            <Content />
        <Router> 
        <div className="flex">
          <SideBar />
          <div className="flex-1">
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
        </div>
      </Router>
                </Context>
                </Suspense>
      </>
    );
};

export default App;
