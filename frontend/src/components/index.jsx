import React, { Suspense, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { routes } from '../utils/routes';
import LoadingSpinner from '../LoadingSpinner';
import Context from './Context';
import SideBar from './SideBar';
import Header from '../components/Header';

require('../components/Styles/Home.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const Index = () => {
    const [publicKey, setPublicKey] = useState(localStorage.getItem('publicKey'));
    const location = useLocation();

    const isAboutUsRoute = location.pathname === '/about-us';

    return (
        <>
            <Suspense fallback={<LoadingSpinner />}>
                <Context>
                    <Header publicKey={publicKey} setPublicKey={setPublicKey} />

                    <div className="flex">
                        {!isAboutUsRoute && <SideBar />} {/* Render Sidebar conditionally */}
                        <div className="flex-grow overflow-auto" style={{ height: '100vh' }}>
                            <Routes>
                                {routes.map((route, index) => (
                                    <Route key={index} path={route.path} element={route.element} />
                                ))}
                            </Routes>
                        </div>
                    </div>
                </Context>
            </Suspense>
        </>
    );
};

export default Index;
