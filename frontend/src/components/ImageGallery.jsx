import React, { useState } from 'react';
import solplayx from '../assets/SOLPLAY-X.png';
import solAnalytics from '../assets/Solplay-ANalytics.png';
import './Styles/ImageGallery.css'

const ImageGallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (image) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      {/* Your existing content goes here */}
      <div className="image-thumbnails">
        <img src={solplayx} alt="SOLPLAY-X" className='w-[20rem] ' onClick={() => openModal(solplayx)} />
        <img src={solAnalytics} alt="Solplay Analytics" className='w-[30rem] ' onClick={() => openModal(solAnalytics)} />
        {/* Add more image thumbnails here */}
      </div>

      {/* Modal for full-screen image */}
      {isModalOpen && (
        <div className="image-modal">
          <div className="modal-content">
            <span className="close-icon" onClick={closeModal}>
              <i className="fas fa-times"></i>
            </span>
            <img src={selectedImage} alt="Full-Screen" className="full-screen-image" />
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
