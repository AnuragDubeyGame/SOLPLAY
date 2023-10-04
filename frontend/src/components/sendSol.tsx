import { WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
import React, { FC, useCallback, useState } from 'react';
import axios from 'axios';
import solanaLogoMark from '../assets/solanaLogoMark.png';
import { API_URL } from '../utils/constant';
const web3 = import('@solana/web3.js');
global.Buffer = require('buffer').Buffer;

export const SendLamportToAddress: FC<{
    fromPublicKey: string;
    toPublicKey: string;
    amount: number;
    gameId: string;
    banner: string;
    title: string;
    category: string;
}> = ({ fromPublicKey, toPublicKey, amount, gameId, banner, title, category }) => {
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();
    const [isPopupOpen, setIsPopupOpen] = useState(true);
    const [transactionStatus, setTransactionStatus] = useState(''); // Track transaction status

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: new PublicKey(fromPublicKey),
                toPubkey: new PublicKey(toPublicKey),
                lamports: (await web3).LAMPORTS_PER_SOL * amount,
            })
        );
        console.log('data****', fromPublicKey, toPublicKey, amount, gameId);
        const signature = await sendTransaction(transaction, connection);
        const result = await connection.confirmTransaction(signature, 'processed');
        console.log('Transaction Result', result);

        if (result.value.err == null) {
            console.log('Transaction Successful');

            setTransactionStatus('Transaction Successful'); // Update transaction status
            // onPopupClose();
            const payload = {
                publicKey: fromPublicKey,
                purchasedGames: gameId,
            };
            axios
                .post(`${API_URL}/api/saveUserData`, payload)
                .then((response) => {
                    console.log('Game Purchased Successful :', response.data);
                })
                .catch((error) => {
                    console.error('Error While Game Purchasing :', error);
                });
        } else {
            console.log('Transaction Unsuccessful');
            setTransactionStatus('Transaction Unsuccessful'); // Update transaction status
        }
    }, [publicKey, sendTransaction, connection]);

    const onCloseButtonClick = () => {
        // Set the state variable to close the popup
        setIsPopupOpen(false);
    };

    const onPopupClose = () => {
        // Close the popup and reset transaction status
        setIsPopupOpen(false);
        setTransactionStatus('');
    };

    return (
        <>
            {isPopupOpen && (
               <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
               <div className="bg-gray-700 mt-14 p-6 rounded-lg shadow-md text-white max-w-2xl flex flex-col items-center">
               <div className=" relative left-[8rem] first-letter:mt-4">
                            <button onClick={onPopupClose} className="px-4 py-2 text-white bg-red-500 rounded-lg">
                                Close
                            </button>
                        </div>
                        <h2 className="text-2xl  text-center mb-4 font-bold">BUY GAME</h2>
                        <img
                            src={`data:image/png;base64,${banner}`}
                            alt="Game Banner"
                            className="object-cover rounded-2xl mb-4"
                        />

                        <form onSubmit={(e) => e.preventDefault()} className="space-y-4 w-full">
                            <form onSubmit={(e) => e.preventDefault()} className="space-y-4 w-full">
                                {/* Your Public Key Input */}
                                <div>
                                    <label htmlFor="publicKey" className="block text-sm font-medium text-gray-300">
                                        Your Public Key:
                                    </label>
                                    <input
                                        type="text"
                                        id="publicKey"
                                        name="publicKey"
                                        className="mt-1 p-3 border rounded-md w-full bg-gray-600 text-gray-200 focus:outline-none focus:border-blue-500"
                                        placeholder="Enter your public key"
                                        value={localStorage.getItem('publicKey')}
                                        readOnly
                                    />
                                </div>

                                {/* Developer Public Key Input */}
                                <div>
                                    <label
                                        htmlFor="developerPublicKey"
                                        className="block text-sm font-medium text-gray-300"
                                    >
                                        Developer Public Key:
                                    </label>
                                    <input
                                        type="text"
                                        id="developerPublicKey"
                                        name="developerPublicKey"
                                        className="mt-1 p-3 border rounded-md w-full bg-gray-600 text-gray-200 focus:outline-none focus:border-blue-500"
                                        placeholder="Enter developer's public key"
                                        value={toPublicKey}
                                        readOnly
                                    />
                                </div>

                                {/* Amount Input */}
                                <div>
                                    <label htmlFor="amount" className="block text-sm font-medium text-gray-300">
                                        Price:{' '}
                                    </label>
                                    <div className="flex items-center">
                                        <img src={solanaLogoMark} alt="Solana Logo" className="object-cover w-6 mr-2" />
                                        <input
                                            type="number"
                                            id="amount"
                                            name="amount"
                                            className="mt-1 p-3 border rounded-md w-full bg-gray-600 text-gray-200 focus:outline-none focus:border-blue-500"
                                            placeholder="Enter the amount"
                                            value={amount}
                                            readOnly
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <div className="flex justify-center">
                                    {transactionStatus ? (
                                        <div className="mb-4 text-green-500 font-semibold">{transactionStatus}</div>
                                    ) : (
                                        <div className="h-full w-full flex justify-center items-center">
                                            <div onClick={onClick} className="relative inline-flex  group">
                                                <div className="absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                                                <p
                                                    title="Get quote now"
                                                    className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                                    role="button"
                                                >
                                                    Get it now
                                                </p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </form>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};

export default SendLamportToAddress;
