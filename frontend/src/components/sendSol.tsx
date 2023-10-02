import { BaseWalletAdapter, WalletAccountError, WalletAdapterNetwork, WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { useConnection, useWallet, WalletContext } from "@solana/wallet-adapter-react";
import { WalletConnectButton } from "@solana/wallet-adapter-react-ui";
import { NekoWalletAdapter } from "@solana/wallet-adapter-wallets";
import { Keypair, SystemProgram, Transaction, PublicKey } from "@solana/web3.js";
import React, { FC, useCallback } from "react";
const web3 = import ('@solana/web3.js');
global.Buffer = require("buffer").Buffer;

export const SendTenLamportToRandomAddress: FC = () => {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();

  const onClick = useCallback(async () => {
    if (!publicKey) throw new WalletNotConnectedError();

    const transaction = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: new PublicKey("3jNpFr6MMVQiSSrT1Bx4skNMptwBWRPbWifBqoRUQqfB"),
        toPubkey: new PublicKey("3jNpFr6MMVQiSSrT1Bx4skNMptwBWRPbWifBqoRUQqfB"),
        lamports: 1_000_000 * 0.2,
      })
    );

    const signature = await sendTransaction(transaction, connection);
    await connection.confirmTransaction(signature, "processed");

  }, [publicKey, sendTransaction, connection]);

  return (
    <button onClick={onClick} disabled={!publicKey}>
      Send 1 lamport to a random address!
    </button>
  );
};

export default SendTenLamportToRandomAddress;