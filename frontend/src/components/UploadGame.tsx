import React, { useState, ChangeEvent } from 'react';
import { API_URL } from '../utils/constant';

const UploadGame = () => {
  const [formData, setFormData] = useState({
    title: '',
    banner: null as File | null,
    description: '',
    category: '',
    developer: '',
    publisher: '',
    publicKey: '',
    releaseDate: '',
    price: '',
    GameFile: null as File | null,
  });
  const [bannerFileName, setBannerFileName] = useState<string>('');
  const [zipFileName, setZipFileName] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files ? files[0] : null });

    // Display the selected file name
    const fileName = files ? files[0].name : '';
    if (name === 'banner') {
      setBannerFileName(fileName);
    } else if (name === 'GameFile') {
      setZipFileName(fileName);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Create FormData
    const form = new FormData();
    for (const key in formData) {
      if (formData[key as keyof typeof formData] !== null) {
        form.append(key, formData[key as keyof typeof formData] as File | string);
      }
    }
  
    try {
      const response = await fetch('http://localhost:5000/api/createNewGame', {
        method: 'POST',
        body: form,
      });
  
      if (response.ok) {
        // Handle success, e.g., show a success message
        console.log('Game uploaded successfully!');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error uploading game:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading game:', error);
    }
  };
  
  return (
    <div className="bg-gray-800 p-8 rounded-lg">
      <h2 className="text-2xl font-bold mt-16 text-white mb-4">Upload Game</h2>
      <form className="max-w-lg mt-3" onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-white">Title:</span>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Banner:</span>
          <div className="relative border-dotted border-2 border-gray-500 rounded-md p-4">
            <input
              type="file"
              name="banner"
              accept="image/*"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
           {bannerFileName && (
              <img
                src={URL.createObjectURL(formData.banner)}
                alt="Uploaded Banner"
                className="mt-2 rounded-md max-h-auto"
                // style={{ maxHeight: '200px' }}
              />
            )}
            <div className="flex flex-col items-center justify-center">
              {
                bannerFileName? '':
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-gray-500 mb-2"
              viewBox="0 0 20 20"
              fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v5H6a1 1 0 100 2h8a1 1 0 100-2h-3V3a1 1 0 00-1-1h-1zm-1 7H7a1 1 0 100 2h2a1 1 0 100-2zm4 0h-1a1 1 0 1000 2h1a1 1 0 100-2zm-1 4H7a1 1 0 100 2h5a1 1 0 100-2z"
                  clipRule="evenodd"
                  />
              </svg>
                }
              {
                bannerFileName? <span className="file-name text-white">{bannerFileName}</span>:
                <span className="text-gray-500">Choose an image file</span>
              }
              {/* <span className="text-gray-500">Choose an image file</span> */}
            </div>
            {/* <span className="file-name text-white">{bannerFileName}</span> */}
          </div>
        </label>

        <label className="block mb-4">
          <span className="text-white">Description:</span>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Category:</span>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Developer:</span>
          <input
            type="text"
            name="developer"
            value={formData.developer}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Publisher:</span>
          <input
            type="text"
            name="publisher"
            value={formData.publisher}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Public Key:</span>
          <input
            type="text"
            name="publicKey"
            value={formData.publicKey}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Release Date:</span>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Price:</span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
        </label>

        <label className="block mb-4">
          <span className="text-white">Zip File:</span>
          <div className="relative border-dotted border-2 border-gray-500 rounded-md p-4">
            <input
              type="file"
              name="GameFile"
              onChange={handleFileChange}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div className="flex flex-col items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-500 mb-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a1 1 0 00-1 1v5H6a1 1 0 100 2h8a1 1 0 100-2h-3V3a1 1 0 00-1-1h-1zm-1 7H7a1 1 0 100 2h2a1 1 0 100-2zm4 0h-1a1 1 0 1000 2h1a1 1 0 100-2zm-1 4H7a1 1 0 100 2h5a1 1 0 100-2z"
                  clipRule="evenodd"
                />
              </svg>
              {
                zipFileName? <span className="file-name text-white">{zipFileName}</span>:
                <span className="text-gray-500">Choose a zip file</span>
              }
              {/* <span className="text-gray-500">Choose a zip file</span> */}
            </div>
            {/* <span className="file-name text-white">{zipFileName}</span> */}
          </div>
        </label>
        <br />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Upload Game
        </button>
      </form>
    </div>
  );
};

export default UploadGame;