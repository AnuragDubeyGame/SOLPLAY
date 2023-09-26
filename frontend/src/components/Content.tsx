import React, { FC } from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Content: FC = () => {
  return (
    <div className="App">
      <WalletMultiButton style={{backgroundColor: '#553c9a' }} />
    </div>
  );
};

export default Content;
