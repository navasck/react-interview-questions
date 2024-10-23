import Counter from '@/components/zustand/Counter';
import User from '@/components/zustand/User';
import React from 'react';

const page = () => {
  return (
    <div>
      <Counter />
      <User></User>
    </div>
  );
};

export default page;
