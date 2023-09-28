import React from 'react';
import UploadGame from '../components/UploadGame';
import GameDetails from '../components/GameDetails';
const Home = React.lazy(() => import('../components/Home'));
const About = React.lazy(() => import('../components/About'));
const Contact = React.lazy(() => import('../components/Contact'));
const CategoryGames = React.lazy(()=> import('../components/CategoryGames'))

export const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/contact',
    element: <Contact />,
  },
  {
    path:"/category/:category" ,
    element:<CategoryGames />
  },
  {
    path:"/upload-game" ,
    element:<UploadGame />
  },
  {
    path:"//game/:id" ,
    element:<GameDetails />
  }
];
