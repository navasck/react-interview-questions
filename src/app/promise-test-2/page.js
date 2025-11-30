'use client';

import React, { useState, useEffect } from 'react';

const Interview = () => {
  const [data1, setData1] = useState(null);
  const [data2, setData2] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   const fetchDependentApis = () => {
  //     setLoading(true);
  //     setError(null);

  //     fetch('https://jsonplaceholder.typicode.com/posts/1')
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error(`HTTP error! status 1: ${res.status}`);
  //         }
  //         return res.json();
  //       })
  //       .then((dataFromApi1) => {
  //         setData1(dataFromApi1);
  //         // Now, make the second API call using data from the first
  //         return fetch(
  //           `https://jsonplaceholder.typicode.com/users/${dataFromApi1.userId}`
  //         );
  //       })
  //       .then((res) => {
  //         if (!res.ok) {
  //           throw new Error(`HTTP error! status 2: ${res.status}`);
  //         }
  //         return res.json();
  //       })
  //       .then((dataFromApi2) => {
  //         setData2(dataFromApi2);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setLoading(false);
  //       });
  //   };

  //   fetchDependentApis();
  // }, []);

  useEffect(() => {
    const fetchDependentApis = async () => {
      setLoading(true);
      setError(null);

      try {
        const res1 = await fetch(
          'https://jsonplaceholder.typicode.com/posts/1'
        );
        if (!res1.ok) {
          throw new Error(`HTTP error! status 1: ${res1.status}`);
        }
        const dataFromApi1 = await res1.json();
        setData1(dataFromApi1);

        const res2 = await fetch(
          `https://jsonplaceholder.typicode.com/users/${dataFromApi1.userId}`
        );
        if (!res2.ok) {
          throw new Error(`HTTP error! status 2: ${res2.status}`);
        }
        const dataFromApi2 = await res2.json();
        setData2(dataFromApi2);

        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchDependentApis();
  }, []);

  if (loading) {
    return <p>Fetching Data...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  return (
    <div>
      <h1>Dependent API Calls</h1>
      {data1 && <pre>Data from API 1: {JSON.stringify(data1, null, 2)}</pre>}
      {data2 && (
        <pre>
          Data from API 2 (dependent on API 1): {JSON.stringify(data2, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Interview;
