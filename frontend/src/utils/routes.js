import React from 'react';

const Home = React.lazy(() => import('../components/Home'));
const About = React.lazy(() => import('../components/About'));
const Contact = React.lazy(() => import('../components/Contact'));

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
];
