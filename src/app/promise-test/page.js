'use client';

import React, { useState, useEffect } from 'react';

const Interview = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);
  const [data4, setData4] = useState(null);
  const [data5, setData5] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApis = async () => {
      try {
        const promise1 = fetch(
          'https://jsonplaceholder.typicode.com/posts/1'
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status 1: ${res.status}`);
          }
          return res.json();
        });

        const promise2 = fetch(
          'https://jsonplaceholder.typicode.com/posts/2'
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status 2: ${res.status}`);
          }
          return res.json();
        });

        const promise3 = fetch(
          'https://jsonplaceholder.typicode.com/posts/3'
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status 3: ${res.status}`);
          }
          return res.json();
        });

        const promise4 = fetch(
          'https://jsonplaceholder.typicode.com/posts/4'
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status 4: ${res.status}`);
          }
          return res.json();
        });

        const promise5 = fetch(
          'https://jsonplaceholder.typicode.com/posts/5'
        ).then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status 5: ${res.status}`);
          }
          return res.json();
        });

        const promise6 = fetch('https://jsonplaceholder.typicode.com/posts/6').then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! status 6: ${res.status}`);
          }
          return res.json();
        })

        // Call all promises concurrently and wait for all of them to resolve
        const [res1, res2, res3, res4, res5] = await Promise.all([
          promise1,
          promise2,
          promise3,
          promise4,
          promise5,
        ]);

        setData1(res1);
        setData2(res2);
        setData3(res3);
        setData4(res4);
        setData5(res5);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchApis();
  }, []); // Empty dependency array ensures this runs only once after the initial render

  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen flex-col gap-4'>
        <h1 className='text-2xl font-bold'>Fetching Data...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className='flex justify-center items-center h-screen flex-col gap-4'>
        <h1 className='text-2xl font-bold text-red-500'>Error Loading Data</h1>
        <p className='text-gray-700'>{error}</p>
      </div>
    );
  }

  return (
    <div className='flex justify-center items-center flex-col gap-4'>
      <h1 className='text-2xl font-bold'>Data from 5 APIs</h1>
      {data1 && (
        <pre>Data from API 1: {JSON.stringify(data1.title, null, 2)}</pre>
      )}
      {data2 && (
        <pre>Data from API 2: {JSON.stringify(data2.title, null, 2)}</pre>
      )}
      {data3 && (
        <pre>Data from API 3: {JSON.stringify(data3.title, null, 2)}</pre>
      )}
      {data4 && (
        <pre>Data from API 4: {JSON.stringify(data4.title, null, 2)}</pre>
      )}
      {data5 && (
        <pre>Data from API 5: {JSON.stringify(data5.title, null, 2)}</pre>
      )}
    </div>
  );
};

export default Interview;
