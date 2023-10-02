import { BaseWalletAdapter, WalletAccountError, WalletAdapterNetwork, WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet, WalletContext } from "@solana/wallet-adapter-react";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";
import { NekoWalletAdapter } from "@solana/wallet-adapter-wallets";
import { Keypair, SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import React, { FC, useCallback } from "react";
import axios from 'axios';


const web3 = import ('@solana/web3.js');
global.Buffer = require("buffer").Buffer;

export const SendTenLamportToRandomAddress: FC<{
  fromPublicKey: PublicKey;
  toPublicKey: PublicKey;
  amount: number;
  username: string;
  purchasedGameId: string;
}> = ({ fromPublicKey, toPublicKey, amount, username, purchasedGameId }) => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: fromPublicKey,
        toPubkey: toPublicKey,
        lamports: (await web3).LAMPORTS_PER_SOL * amount,
      })
    );

    const signature = await sendTransaction(transaction, connection);
    const result = await connection.confirmTransaction(signature, 'processed');

    if (result.value.err == null) {
      console.log('Transaction Successful');

      const payload = {
        username,
        publicKey: publicKey.toBase58(),
        purchasedGames: purchasedGameId,
      };

      try {
        const response = await axios.post('http://localhost:5000/api/saveUserData', payload);
        console.log('API Response:', response.data);
      } catch (error) {
        console.error('API Error:', error);
      }
    } else {
      console.log('Transaction Unsuccessful');
    }
  }, [publicKey, sendTransaction, connection, fromPublicKey, toPublicKey, amount, username, purchasedGameId]);

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Send {amount} lamports to a random address!
    </button>
  );
};

export default SendTenLamportToRandomAddress;