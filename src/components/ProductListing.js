'use client';
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 10,
    image:
      'https://www.aarong.com/media/catalog/product/0/0/0040000102207.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  },
  {
    id: 2,
    name: 'Product 2',
    price: 20,
    image:
      'https://www.aarong.com/media/catalog/product/0/0/0040000102207.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  },
  {
    id: 3,
    name: 'Product 3',
    price: 30,
    image:
      'https://www.aarong.com/media/catalog/product/0/0/0040000102207.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  },
  {
    id: 4,
    name: 'Product 4',
    price: 5,
    image:
      'https://www.aarong.com/media/catalog/product/0/0/0040000102207.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  },
  {
    id: 5,
    name: 'Product 5',
    price: 20,
    image:
      'https://www.aarong.com/media/catalog/product/0/0/0040000102207.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  },
  {
    id: 6,
    name: 'Product 6',
    price: 50,
    image:
      'https://www.aarong.com/media/catalog/product/0/0/0040000102207.jpg?optimize=high&bg-color=255,255,255&fit=bounds&height=400&width=300&canvas=300:400',
  },
];

const ProductListing = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('techcoin-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  console.log('savedCart', cart);

  useEffect(() => {
    localStorage.setItem('techcoin-cart', JSON.stringify(cart));
  }, [cart]);

  // const addToCart = (product) => {
  //   setCart([...cart, product]);
  // };

  const addToCart = (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      // Product already exists in cart, update quantity
      setCart((prevCart) =>
        prevCart.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      // Product not found in cart, add with quantity 1
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
        <h1 className='text-xl'>Product Listing</h1>
        <Link href='/cart' className='text-white'>
          Cart: {cart.length} items
        </Link>
      </header>
      <main className='p-4'>
        <div
          id='product-list'
          className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'
        >
          {products.map((product) => (
            <div key={product.id} className='bg-white p-4 rounded-lg shadow-md'>
              <Image
                src={product.image}
                alt={product.name}
                className='w-full object-cover rounded-md'
                width={300}
                height={400}
              />
              <h2 className='text-lg font-bold mt-2'>{product.name}</h2>
              <p className='text-gray-700'>${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className='mt-2 bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700'
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default ProductListing;
