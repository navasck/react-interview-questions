'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Cart = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('techcoin-cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // const calculateTotal = () => {
  //   return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  // };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => {
        // Ensure price is a number before adding to total
        const price = Number(item.price) || 0;
        return total + price;
      }, 0)
      .toFixed(2);
  };

  return (
    <div className='min-h-screen bg-gray-100'>
      <header className='bg-gray-800 text-white p-4 flex justify-between items-center'>
        <h1 className='text-xl'>Cart</h1>
        <Link href='/products' className='text-white'>
          Continue Shopping
        </Link>
      </header>
      <main className='p-4'>
        <div className='max-w-4xl mx-auto'>
          {cart.length > 0 ? (
            <>
              <div id='cart-items' className='grid grid-cols-1 gap-4'>
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className='flex bg-white p-4 rounded-lg shadow-md'
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      className='w-24 h-24 object-cover rounded-md'
                      width={96}
                      height={96}
                    />
                    <div className='ml-4 flex-grow'>
                      <h2 className='text-lg font-bold'>{item.name}</h2>
                      <div className='flex justify-between'>
                        <p className='text-gray-700'>Price</p>
                        <p className='text-gray-700'>
                          ${item.price.toFixed(2)}
                        </p>
                      </div>
                      <div className='flex justify-between'>
                        <p className='text-gray-700'>Quantity</p>
                        <p className='text-gray-700'>{item?.quantity}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className='mt-8 p-4 bg-white rounded-lg shadow-md'>
                <h2 className='text-xl font-bold'>Order Summary</h2>
                <div className='flex justify-between mt-4'>
                  <p className='text-gray-700'>Total:</p>
                  <p className='text-gray-700'>${calculateTotal()}</p>
                </div>
                <button className='mt-4 w-full bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700'>
                  Proceed to Checkout
                </button>
              </div>
            </>
          ) : (
            <div className='text-center'>
              <p className='text-gray-700'>Your cart is empty</p>
              <Link
                href='/'
                className='mt-4 inline-block bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700'
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Cart;
