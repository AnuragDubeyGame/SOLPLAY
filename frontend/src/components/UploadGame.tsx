import React, { useState, ChangeEvent } from 'react';
import { API_URL } from '../utils/constant';

const categoryOptions = [
  'Action',
  'Adventure',
  'Role-Playing Game (RPG)',
  'First-Person Shooter (FPS)',
  'Third-Person Shooter (TPS)',
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
  'Massively Multiplayer Online (MMO)',
  'Virtual Reality (VR)',
];

const UploadGame = () => {
  const [formData, setFormData] = useState({
    title: '',
    banner: null as File | null,
    description: '',
    category: categoryOptions[0], // Initialize with the first option
    developer: '',
    publisher: '',
    publicKey: '',
    releaseDate: '',
    isFree: false, // Add the 'isFree' checkbox state
    price: '', // Store price as a string to allow user input
    GameFile: null as File | null,
  });
  const [bannerFileName, setBannerFileName] = useState<string>('');
  const [zipFileName, setZipFileName] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;

    // If the input is a checkbox, set 'isFree' accordingly
    if (type === 'checkbox') {
      setFormData({ ...formData, [name]: checked, price: checked ? '0' : '' });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    const selectedFile = files ? files[0] : null;

    // Check if the uploaded file is a zip file
    if (name === 'GameFile' && selectedFile && !selectedFile.name.endsWith('.zip')) {
      alert('Please select a .zip file for the game.');
      return;
    }

    setFormData({ ...formData, [name]: selectedFile });

    // Display the selected file name
    const fileName = selectedFile ? selectedFile.name : '';
    if (name === 'banner') {
      setBannerFileName(fileName);
    } else if (name === 'GameFile') {
      setZipFileName(fileName);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
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

    // Check if the uploaded file is a zip file
    if (formData.GameFile && !formData.GameFile.name.endsWith('.zip')) {
      alert('Please select a .zip file for the game.');
      return;
    }

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
        // Handle success and show confirmation message
        setSuccessMessage('Game uploaded successfully!');
        // Clear the form data
        setFormData({
          title: '',
          banner: null,
          description: '',
          category: categoryOptions[0], // Reset to the first option
          developer: '',
          publisher: '',
          publicKey: '',
          releaseDate: '',
          isFree: false, // Reset isFree to false
          price: '', // Reset price to an empty string
          GameFile: null,
        });
        setBannerFileName('');
        setZipFileName('');
      } else {
        // Handle error, e.g., show an error message
        console.error('Error uploading game:', response.statusText);
      }
    } catch (error) {
      console.error('Error uploading game:', error);
    }
  };

  return (
    <div className="bg-gray-800 p-8 rounded-lg w-full text-white">
      <h2 className="text-2xl font-bold mt-16 mb-4">Upload Game</h2>
      {successMessage && (
        <div className="bg-green-500 text-black rounded p-2 mb-4">{successMessage}</div>
      )}
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
            {bannerFileName && formData.banner && (
              <img
                src={URL.createObjectURL(formData.banner)}
                alt="Uploaded Banner"
                className="mt-2 rounded-md max-h-auto"
                style={{ maxHeight: '250px', maxWidth: '315px' }}
              />
            )}
            <div className="flex flex-col items-center justify-center">
              {bannerFileName ? (
                <span className="file-info text-green-500">Banner Image: {bannerFileName}</span>
              ) : (
                <span className="text-gray-500">Choose an image file (315x250 pixels)</span>
              )}
            </div>
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
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          >
            {categoryOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
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

        <label className="block mb-4 flex items-center">
          <span className="text-white mr-2">Free:</span>
          <input
            type="checkbox"
            name="isFree"
            checked={formData.isFree}
            onChange={handleChange}
            style={{ width: '20px', height: '20px' }}
          />
        </label>
        <label className="block mb-4 flex items-center">
          <span className="text-white mr-2">Price:</span>
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            disabled={formData.isFree}
            min="0"
            style={{ width: '80px' }}
            className="mt-1 block rounded-md bg-gray-700 border-transparent focus:border-blue-500 focus:bg-gray-700 focus:ring-0 px-3 py-2"
          />
          <span className="text-white ml-2">SOL</span>
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
              {zipFileName ? (
                <span className="file-info text-green-500">Zip File: {zipFileName}</span>
              ) : (
                <span className="text-gray-500">Choose a zip file</span>
              )}
            </div>
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
