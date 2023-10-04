import React, { Suspense, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import Content from './Content';
import Context from './Context';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { API_URL } from '../utils/constant';
import PublicKeyParent from '../utils/publicKeyParent';
const axios = require('axios');

export const HeaderpublicKey = localStorage.getItem('publicKey');
const glossyHeaderStyles = {
    position: 'relative',
    background: 'linear-gradient(45deg, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.9))',
    boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.3)',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    padding: '5px',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '7vh',
};

const logoStyles = {
    width: '180px',
    height: 'auto',
    marginRight: '10px',
    position: 'absolute',
    left: '5px',
    cursor: 'pointer',
};

const labelStyles = {
    flex: '1',
    textAlign: 'right',
    color: 'white',
    fontSize: '18px',
    fontWeight: 'bold',
    marginRight: '1rem',
};

const buttonStyles = {
    backgroundColor: 'rgb(85, 60, 154)',
    border: 'none',
    borderRadius: '5px',
    padding: '10px 15px',
    color: 'white',
    transition: 'background-color 0.3s ease',
};

const contentStyles = {
    marginLeft: 'auto',
    backgroundColor: '#553c9a',
    borderRadius: '5px',
};

const buttonHoverStyles = {
    backgroundColor: '#4a90e2',
};

function callSaveUserAPI(publicKey) {
    const payload = {
        publicKey: typeof publicKey === 'string' ? publicKey : (publicKey)?.toBase58(),
        purchasedGames: '',
    };

    fetch(`${API_URL}/api/saveUserData`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            console.log('Sent SaveUser API Successfully:', data);
        })
        .catch((error) => {
            console.error('Error While Sending SaveUser API Purchasing:', error);
        });
}

const Header = ({ setPublicKey }) => {
    const { publicKey } = useWallet();

    useEffect(() => {
        console.log('Public Key:', publicKey?.toBase58());
        localStorage.setItem('publicKey', publicKey?.toBase58() || '');
        setPublicKey(publicKey?.toBase58() || '');
        callSaveUserAPI(publicKey?.toBase58() || '');
    }, [publicKey, setPublicKey]);

    const [isMobile, setIsMobile] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            if (window.innerWidth <= 700) {
                setIsMobile(true);
            } else {
                setIsMobile(false);
            }
        };

        checkIsMobile();

        window.addEventListener('resize', checkIsMobile);

        return () => {
            window.removeEventListener('resize', checkIsMobile);
        };
    }, []);

    const handleUploadGame = () => {
        window.open('/upload-game', '_blank');
    };

    const combinedButtonStyles = {
        ...buttonStyles,
        ...(isHovered ? buttonHoverStyles : {}),
    };

    return (
        <header style={glossyHeaderStyles}>
            {publicKey ? (
                <div className="container mx-auto text-white">
                    <Suspense fallback={<div>loading...</div>}>
                        <Context>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <a href="/" style={logoStyles}>
                                    <img src={require('../assets/SOLPLAYBANNER.png')} alt="Logo" />
                                </a>
                                <span style={labelStyles}>
                                    <button
                                        style={combinedButtonStyles}
                                        onMouseEnter={() => setIsHovered(true)}
                                        onMouseLeave={() => setIsHovered(false)}
                                        onClick={handleUploadGame}
                                    >
                                        Upload Game
                                    </button>
                                </span>
                                <div style={contentStyles}>
                                    <div style={{ display: 'flex', alignItems: 'center', marginRight: '0px' }}>
                                        <WalletMultiButton />
                                    </div>
                                </div>
                            </div>
                        </Context>
                    </Suspense>
                </div>
            ) : (
                <>
                    <div className="container mx-auto text-white">
                        <a href="/" style={logoStyles}>
                            <img src={require('../assets/SOLPLAYBANNER.png')} alt="Logo" />
                        </a>
                        <div className="flex justify-between">
                            <div style={contentStyles}>
                                <WalletMultiButton />
                            </div>
                        </div>
                    </div>
                </>
            )}
        </header>
    );
};

export default Header;
