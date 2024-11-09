'use client';

import React, { useEffect, useRef, useState } from 'react';

const InfiniteScroll = () => {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false); // Loading state
  const loadingRef = useRef(null);

  const fetchImages = async () => {
    setLoading(true); // Set loading state to true
    try {
      const response = await fetch(
        `https://picsum.photos/v2/list?page=${page}&limit=10`
      );
      const data = await response.json();
      setImages((prevImages) => [...prevImages, ...data]);
    } catch (error) {
      console.error('Error fetching images:', error);
    } finally {
      setLoading(false); // Set loading state to false when done
    }
  };

  // Initial fetch
  useEffect(() => {
    fetchImages();
  }, []);

  // Intersection Observer to load more images
  useEffect(() => {
    // Step 1: Create an IntersectionObserver
    const observer = new IntersectionObserver(([entry]) => {
      // Step 2: Check if the element is in the viewport and we are not currently loading
      if (entry.isIntersecting && !loading) {
        // Step 3: If both conditions are met, increment the page number to load more images
        setPage((prevPage) => prevPage + 1);
      }
    });

    // Step 4: Store a reference to the loadingRef (element that triggers the observer)
    const currentLoadingRef = loadingRef.current;

    // Step 5: Begin observing the element if the reference exists
    if (currentLoadingRef) {
      observer.observe(currentLoadingRef);
    }

    // Step 6: Cleanup function to stop observing the element when the component unmounts or dependencies change
    return () => {
      if (currentLoadingRef) {
        observer.unobserve(currentLoadingRef);
      }
    };
  }, []); // Empty dependency array means this effect will run only once on initial mount

  // Load more images when the page changes
  useEffect(() => {
    if (page > 1) {
      fetchImages();
    }
  }, [page]);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {images.map((image) => (
        <div
          key={image.id}
          className='h-40 w-full my-5 bg-gray-200 flex items-center justify-center'
        >
          <img
            src={image.download_url}
            alt={image.author}
            className='h-full object-cover'
          />
        </div>
      ))}
      {loading && (
        <div className='text-center mt-5'>
          <p className='text-gray-600'>Loading more images...</p>
        </div>
      )}
      <div ref={loadingRef} className='text-center mt-5'>
        {!loading && (
          <p className='text-gray-600'>Scroll down to load more...</p>
        )}
      </div>
    </div>
  );
};

export default InfiniteScroll;
