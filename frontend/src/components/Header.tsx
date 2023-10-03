import React, { Suspense, useEffect, useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import Content from './Content';
import Context from './Context';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { API_URL } from '../utils/constant';
const axios = require('axios');

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
};

const labelStyles = {
  flex: '1',
  textAlign: 'right',
  color: 'white',
  fontSize: '18px',
  fontWeight: 'bold',
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
};

const buttonHoverStyles = {
  backgroundColor: '#4a90e2',
};


function callSaveUserAPI(publicKey) {
  if (publicKey) {
    const payload = {
      publicKey: publicKey.toBase58(), // Assuming publicKey is not null here
      purchasedGames: "",
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
}

const Header = () => {
  const { publicKey } = useWallet();

  useEffect(() => {
    console.log('Public Key:', publicKey?.toBase58());
    callSaveUserAPI(publicKey);
  }, [publicKey]);

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
                <img
                  src={require("../assets/SOLPLAYBANNER.png")}
                  alt="Logo"
                  style={logoStyles}
                />
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
                  <div style={{ display: 'flex', alignItems: 'center', marginRight: '10px' }}>
                    <WalletMultiButton />
                  </div>
                </div>
              </div>
            </Context>
          </Suspense>
        </div>
      ) : (
        <>
          <img
            src={require("../assets/SOLPLAYBANNER.png")}
            alt="Logo"
            style={logoStyles}
          />
          <div className='flex justify-between'>
            <div style={contentStyles}>
              <WalletMultiButton />
            </div>
            Please Connect Your Wallet
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
