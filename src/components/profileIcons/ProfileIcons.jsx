import React, { useState } from 'react';
import './_ProfileIcons.scss';
import image1 from '../../assets/ProfileImage1.svg';
import image2 from '../../assets/ProfileImage2.svg';
import image3 from '../../assets/ProfileImage3.svg';
import image4 from '../../assets/ProfileImage4.svg';
import image5 from '../../assets/ProfileImage5.svg';
import image6 from '../../assets/ProfileImage6.svg';

function ProfileIcons() {
  const [highlightedIndex, setHighlightedIndex] = useState(null);

  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ];

  const handleImageClick = (index) => {
    setHighlightedIndex(index);
  };

  return (
    
      
      <div className="profile-container">
      <p>Select A Profile Icon</p>
      <div className="image-block">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={highlightedIndex === index ? 'highlighted' : ''}
            onClick={() => handleImageClick(index)}
          />
        ))}
        </div>
      </div>
   
  );
}

export default ProfileIcons;
