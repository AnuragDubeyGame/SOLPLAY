// PublicKeyParent.tsx
import React from 'react';
import Header from '../components/Header';
import GameDetails from '../components/GameDetails';
import UploadGame from '../components/UploadGame';

const PublicKeyParent = () => {
  const [publicKey, setPublicKey] = React.useState(null);

  // Define a function to set the publicKey
  const handleSetPublicKey = (newPublicKey) => {
    setPublicKey(newPublicKey);
  };

  return (
    <div>
      {/* Pass handleSetPublicKey function as a prop to Header */}
      <Header setPublicKey={handleSetPublicKey} />
      {/* Pass publicKey as a prop to GameDetails */}
      <GameDetails publicKey={publicKey} />
    </div>
  );
};

export default PublicKeyParent;
