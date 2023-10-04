import React, { useState, ChangeEvent, useEffect } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { API_URL } from '../utils/constant';

const categoryOptions = [
    'Action',
    'Adventure',
    'RPG',
    'FPS',
    'TPS',
    'Platformer',
    'Puzzle',
    'Racing',
    'Sports',
    'Simulation',
    'Strategy',
    'Fighting',
    'Horror',
    'Sandbox',
    'Survival',
    'Music/Rhythm',
    'Educational',
    'Casual',
    'MMO',
    'VR',
];

const UploadGame = () => {
    const { publicKey } = useWallet();
    const [formData, setFormData] = useState({
        title: '',
        banner: null,
        description: '',
        category: categoryOptions[0],
        developer: '',
        publisher: '',
        publicKey: localStorage.getItem('publicKey'),
        releaseDate: '',
        isFree: false,
        price: '',
        GameFile: null,
    });

    const [bannerFileName, setBannerFileName] = useState('');
    const [zipFileName, setZipFileName] = useState('');
    const [loading, setLoading] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);

    useEffect(() => {
        getPublicKey();
    }, [publicKey]);

    const getPublicKey = () => {
        console.log('public key get item......', localStorage.getItem('publicKey'));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'checkbox') {
            setFormData({ ...formData, [name]: checked, price: checked ? '0' : '' });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleFileChange = (e) => {
        const { name, files } = e.target;
        const selectedFile = files ? files[0] : null;

        if (name === 'banner') {
            if (selectedFile && selectedFile.type.startsWith('image/')) {
                const image = new Image();

                image.onload = () => {
                    if (image.width === 315 && image.height === 250) {
                        setFormData({ ...formData, [name]: selectedFile });
                        const fileName = selectedFile ? selectedFile.name : '';
                        setBannerFileName(fileName);
                    } else {
                        alert('Banner image dimensions must be 315x250 pixels.');
                    }
                };

                image.src = URL.createObjectURL(selectedFile);
            } else {
                alert('Please select a valid image file for the banner.');
            }
        } else if (name === 'GameFile') {
            if (selectedFile && selectedFile.name.endsWith('.zip')) {
                setFormData({ ...formData, [name]: selectedFile });
                const fileName = selectedFile ? selectedFile.name : '';
                setZipFileName(fileName);
            } else {
                alert('Please select a .zip file for the game.');
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.title ||
            !formData.description ||
            !formData.developer ||
            !formData.publisher ||
            !formData.publicKey ||
            !formData.releaseDate ||
            (formData.isFree === false && (!formData.price || parseFloat(formData.price) < 0)) ||
            !formData.banner ||
            !formData.GameFile
        ) {
            alert('Please fill in all required fields.');
            return;
        }

        if (formData.GameFile && !formData.GameFile.name.endsWith('.zip')) {
            alert('Please select a .zip file for the game.');
            return;
        }

        const form = new FormData();
        for (const key in formData) {
            if (formData[key] !== null) {
                form.append(key, formData[key]);
            }
        }

        setLoading(true);

        try {
            const response = await fetch(`${API_URL}/api/createNewGame`, {
                method: 'POST',
                body: form,
            });

            if (response.ok) {
                setUploadSuccess(true);
                setFormData({
                    title: '',
                    banner: null,
                    description: '',
                    category: categoryOptions[0],
                    developer: '',
                    publisher: '',
                    publicKey: '',
                    releaseDate: getCurrentDate(),
                    isFree: false,
                    price: '',
                    GameFile: null,
                });
                setBannerFileName('');
                setZipFileName('');
            } else {
                console.error('Error uploading game:', response.statusText);
            }
        } catch (error) {
            console.error('Error uploading game:', error);
        } finally {
            setLoading(false);
        }
    };

    const getCurrentDate = () => {
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    };

    return (
        <div className="bg-gray-800 min-h-screen flex items-center justify-center">
            <div className="bg-gray-800 text-white p-8 w-full max-w-screen-lg rounded-lg shadow-lg">
                <h2 className="text-3xl font-bold mb-6">Upload Game</h2>
                <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit}>
                    {/* Left Section */}
                    <div className="col-span-1">
                        <label className="block mb-6">
                            <span className="text-white text-lg">Title:</span>
                            <input
                                type="text"
                                name="title"
                                value={formData.title}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                            />
                        </label>

                        <label className="block mb-6">
                            <span className="text-white text-lg">Description:</span>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                            />
                        </label>

                        <label className="block mb-6">
                            <span className="text-white text-lg">Category:</span>
                            <select
                                name="category"
                                value={formData.category}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                            >
                                {categoryOptions.map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </label>

                        <label className="block mb-6">
                            <span className="text-white text-lg">Developer:</span>
                            <input
                                type="text"
                                name="developer"
                                value={formData.developer}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                            />
                        </label>

                        <label className="block mb-6">
                            <span className="text-white text-lg">Publisher:</span>
                            <input
                                type="text"
                                name="publisher"
                                value={formData.publisher}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                            />
                        </label>
                    </div>

                    {/* Right Section */}
                    <div className="col-span-1">
                        <label className="block mb-6">
                            <span className="text-white text-lg">Banner:</span>
                            <div className="relative border-dotted border-2 border-gray-500 rounded-md p-4">
                                <input
                                    type="file"
                                    name="banner"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                {bannerFileName && formData.banner && (
                                    <img
                                        src={URL.createObjectURL(formData.banner)}
                                        alt="Uploaded Banner"
                                        className="flex justify-center"
                                    />
                                )}
                                <div className="flex flex-col items-center justify-center mt-4">
                                    {bannerFileName ? (
                                        <span className="file-info text-green-500 text-lg">Banner Image: {bannerFileName}</span>
                                    ) : (
                                        <span className="text-gray-500 text-lg">Choose an image file (315x250 pixels)</span>
                                    )}
                                </div>
                            </div>
                        </label>

                        <label className="block mb-6">
                            <span className="text-white text-lg">Public Key:</span>
                            <input
                                type="text"
                                name="publicKey"
                                value={formData.publicKey}
                                onChange={handleChange}
                                readOnly={true}
                                className="mt-2 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                            />
                        </label>

                        <label className="block mb-6">
                            <span className="text-white text-lg">Release Date:</span>
                            <input
                                type="date"
                                name="releaseDate"
                                value={formData.releaseDate}
                                onChange={handleChange}
                                className="mt-2 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                            />
                        </label>
                        <div className='flex'>
                            <label className="block mb-6 mr-6 flex items-center">
                                <span className="text-white text-lg mr-2">Free:</span>
                                <input
                                    className='px-4 py-3 text-lg'
                                    type="checkbox"
                                    name="isFree"
                                    checked={formData.isFree}
                                    onChange={handleChange}
                                    style={{ width: '24px', height: '24px' }}
                                />
                            </label>

                            <label className="block mb-6 flex items-center">
                                <span className="text-white text-lg mr-2">Price:</span>
                                <input
                                    type="text"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                    disabled={formData.isFree}
                                    pattern="[0-9]+(\.[0-9]{1,2})?"
                                    min="0"
                                    style={{ width: '80px' }}
                                    className="mt-2 block rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-4 py-3 text-lg"
                                />
                                <span className="text-white text-lg ml-2">SOL</span>
                            </label>
                        </div>
                    </div>

                    {/* Zip File Section */}
                    <div className="col-span-2">
                        <label className="block mb-6">
                            <span className="text-white text-lg">Zip File:</span>
                            <div className="relative border-dotted border-2 border-gray-500 rounded-md p-4">
                                <input
                                    type="file"
                                    name="GameFile"
                                    onChange={handleFileChange}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />
                                <div className="flex flex-col items-center justify-center mt-1">
                                    {zipFileName ? (
                                        <span className="file-info text-green-500 text-lg">Zip File: {zipFileName}</span>
                                    ) : (
                                        <span className="text-gray-500 text-lg">Choose a zip file</span>
                                    )}
                                </div>
                            </div>
                        </label>
                    </div>

                    {/* Submit Button */}
                    <div className="col-span-2 flex items-center justify-center">
                        <button
                            type="submit"
                            className={`bg-${uploadSuccess ? 'green' : 'blue'}-500 hover:bg-${uploadSuccess ? 'green' : 'blue'}-600 text-white bg-[#553c9a] font-bold py-2 px-6 rounded-full focus:outline-none focus:shadow-outline text-lg`}
                            disabled={loading || uploadSuccess}
                        >
                            {loading ? 'Uploading...' : uploadSuccess ? 'Uploaded Success!' : 'Upload Game'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UploadGame;
