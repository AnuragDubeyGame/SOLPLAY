import React, { Suspense } from 'react';
import Content from './Content';
import Context from './Context';

const glossyHeaderStyles = {
  background: 'linear-gradient(to bottom, black, transparent)',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '5px',
  color: 'white',
  height: '10vh'
};

const Header = () => {
  return (
    <header style={glossyHeaderStyles}>
      <div className="container mx-auto text-white">
        <Suspense fallback={<div>loading...</div>}>
          <Context >
          <Content />
          </Context>
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
