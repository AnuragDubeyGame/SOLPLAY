import React, { FC, Suspense, useEffect, useState } from 'react';
import Context from './components/Context';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import Header from './components/Header';
import LoadingSpinner from './LoadingSpinner';

import Index from './components';
import UploadGame from './components/UploadGame';
import { routesWithoutNav } from './utils/routesWithoutNav';
require('./App.css');
require('@solana/wallet-adapter-react-ui/styles.css');

const App: FC = () => {
    return (
        <>

            <Index />
        </>
    );
};

export default App;
