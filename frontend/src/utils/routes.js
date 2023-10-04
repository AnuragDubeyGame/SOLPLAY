import React from 'react';
import UploadGame from '../components/UploadGame';
import GameDetails from '../components/GameDetails';
import BuyGame from '../components/BuyGame';
const Home = React.lazy(() => import('../components/Home'));
const CategoryGames = React.lazy(()=> import('../components/CategoryGames'))

export const routes = [
  {
    path: '/',
    element: <Home />,
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
  },
  {
    path:"//buy-game" ,
    element:<BuyGame />
  }
];
