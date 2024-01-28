import React, { useState, useEffect } from 'react';
import './gallery.css'

const Gallery = () => {
  const numberOfImages = 8;
  const [images, setImages] = useState([]);

  useEffect(() => {
    const loadImage = async () => {
      const loadedImages = [];

      for (let i = 1; i <= numberOfImages; i++) {
        console.log('hi');
        const image = await import(`../images/${i}.png`);
        loadedImages.push(
          <img className="gallery-image" key={i} src={image.default} alt="thai dish" />
        );
      }

      setImages(loadedImages);
    };

    loadImage();
  }, [numberOfImages]);

  return (
    <div className='gallery-container'>
      <h2>Gallery</h2>
      <div className='gallery-images-container'>
        {images}
      </div>
    </div>
  );
};

export default Gallery;
