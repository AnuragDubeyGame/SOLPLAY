import React, { FC} from 'react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';

const Content: FC = () => {
    return (
        <div className="App">
            <WalletMultiButton />
        </div>
    );
};

export default Content;
