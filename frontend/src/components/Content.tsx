import React, { FC } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Content: FC = () => {
  const openGoogle = () => {
    window.open('https://www.google.com', '_blank'); // Open Google.com in a new tab
  };

  return (
    <div className="App">
      <div style={{ position: 'absolute', top: '50%', right: '10px', transform: 'translateY(-50%)' }}>
        {/* <a
          href="https://www.google.com"
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', cursor: 'pointer' }}
          onClick={openGoogle}
        >
          <span style={{ fontSize: '18px', fontWeight: 'bold', color: '#fff', marginRight: '20px' }}>About Us</span>
        </a> */}
        <WalletMultiButton style={{ backgroundColor: '#553c9a' }} />
      </div>
    </div>
  );
};

export default Content;
