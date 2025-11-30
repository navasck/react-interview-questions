'use client';

import BodyContent from '@/components/BodyContent';
import React, { useState, useEffect } from 'react';

const Interview = () => {

  const [myname, setMyname] = useState('');

  const handleShowName = (name) => {
    setMyname(name);
  };



  return (
    <div className='flex flex-col h-screen justify-between'>
      <div className='bg-red-700 h-10'></div>
      <div className='bg-white flex-grow flex justify-between'>
        <div className='bg-red-300 h-full w-10'>123</div>
        <div className='bg-red-100 w-full'>
          <BodyContent handleShowName={handleShowName} />
        </div>
        <div className='bg-red-500 h-full w-10 relative'>
          <div className='absolute bottom-[-40px] left-0 w-full h-10 bg-red-500 z-40'>
            123
          </div>
          123
        </div>
      </div>
      <div className='bg-slate-900 h-10 flex text-white'>{myname}</div>
    </div>
  );
};

export default Interview;
