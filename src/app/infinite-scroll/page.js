'use client';
import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

function Page() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMoreProducts, setHasMoreProducts] = useState(true);
  const [hasMorePages, setHasMorePages] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 20; // Adjust as needed
  const { ref, inView } = useInView({ threshold: 0.5 }); // Adjust threshold as needed

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/posts'
        );
        const data = await response.json();
        setProducts(data);
        setHasMoreProducts(data.length > 0);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const fetchMoreProducts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts?offset=' + products.length
      );
      const data = await response.json();
      setProducts([...products, ...data]);
      setHasMoreProducts(data.length > 0);
    } catch (error) {
      console.error('Error fetching more products:', error);
    }
  };

  useEffect(() => {
    if (inView && hasMoreProducts) {
      fetchMoreProducts();
    }
  }, [inView, hasMoreProducts]);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {products.map((product) => (
            <div key={product.id}>
              {/* Product details */}
              <h3>{product.title}</h3>
              <p>{product.body}</p>
            </div>
          ))}
          <div ref={ref}>{hasMoreProducts && <p>Load more</p>}</div>
        </div>
      )}
    </div>
  );
}

export default Page;
