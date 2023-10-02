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
        fromPubkey: new PublicKey("HuwCZkBnTECxsWwRe9a9RW8ZZjeouKvXSdiA25kVZyrW"),
        toPubkey: new PublicKey("2SemWW9QNiYTkYc9fWuH75WYRCvUj2oymTv7EJAYq2ko"),
        lamports: (await web3).LAMPORTS_PER_SOL * 0.2,
      })
    );

    const signature = await sendTransaction(transaction, connection);
    const result = await connection.confirmTransaction(signature, "processed");
    console.log("transaction Resuilt",result);

    if(result.value.err == null){
      console.log("Transaction Successful")

      

    }else{
      console.log("Transaction UnSuccessful")
    }
    
  }, [publicKey, sendTransaction, connection]);

  
  return (<>
  





        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
          <div className="bg-white p-6 rounded-lg shadow-md text-black">
            <h2 className="text-xl font-semibold mb-4">Buy Game</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              {/* Your Public Key Input */}
              <div className="mb-4">
                <label htmlFor="publicKey" className="block text-sm font-medium text-gray-700">
                  Your Public Key
                </label>
                <input
                  type="text"
                  id="publicKey"
                  name="publicKey"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter your public key"
                  value={localStorage.getItem('publicKey')}
                  readOnly
                />
              </div>

              {/* Developer Public Key Input */}
              <div className="mb-4">
                <label htmlFor="developerPublicKey" className="block text-sm font-medium text-gray-700">
                  Developer Public Key
                </label>
                <input
                  type="text"
                  id="developerPublicKey"
                  name="developerPublicKey"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter developer's public key"
                  value={''}
                  readOnly
                />
              </div>

              {/* Amount Input */}
              <div className="mb-4">
                <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                  Amount
                </label>
                <input
                  type="number"
                  id="amount"
                  name="amount"
                  className="mt-1 p-2 border rounded-md w-full"
                  placeholder="Enter the amount"
                  value={''}
                  readOnly
                />
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
              
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={onClick} 
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>


 

  

  </>
  );
};

export default SendTenLamportToRandomAddress;
