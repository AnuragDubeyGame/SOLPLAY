import React, { FC, Suspense } from 'react';
import Context from './components/Context';
import SideBar from './components/SideBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { routes } from './utils/routes';
import Header from './components/Header';
import LoadingSpinner from './LoadingSpinner';
import RightSidebar from './components/RightSidebar';
import Index from './components';
import UploadGame from './components/UploadGame';

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
