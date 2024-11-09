'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function Page() {
  const [images, setImages] = useState([]);
  const [imageRefs, setImageRefs] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/?results=10');
        const data = await response.json();
        setImages(
          data.results.map((user) => ({
            url: user.picture.large,
            alt: `${user.name.first} ${user.name.last}`,
            isLoaded: false,
          }))
        );
        setImageRefs(Array(data.results.length).fill(null));
      } catch (error) {
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleImageLoad = (index) => {
    setImages((prevImages) => {
      prevImages[index].isLoaded = true;
      return [...prevImages];
    });
  };

  const handleInView = (index) => {
    if (!images[index].isLoaded) {
      handleImageLoad(index);
    }
  };

  return (
    <div>
      {images.map((image, index) => (
        <div key={index} ref={imageRefs[index]}>
          <img
            src={image.url}
            alt={image.alt}
            onLoad={() => handleImageLoad(index)}
            style={{ visibility: image.isLoaded ? 'visible' : 'hidden' }}
          />
        </div>
      ))}
    </div>
  );
}

export default Page;
