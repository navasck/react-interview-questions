import React, { useState,useRef } from 'react'

const BodyContent = ({ handleShowName }) => {
  const [name, setName] = useState('');
  const [myname, setMyname] = useState('');
  const [showText, setshowText] = useState(false);
  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSubmit = (name) => {

    setshowText(true);
    handleShowName(name);
  };
  return (
    <div>
      <input
        type='text'
        value={name}
        placeholder='Enter your name'
        onChange={handleChange}
        className='border-2 border-gray-300 rounded-md p-2 w-full'
      />
      <button
        onClick={()=> handleSubmit(name)}
        className='bg-blue-500 text-black rounded-md p-2 mt-2'
      >
        Submit
      </button>
      <p>{showText ? myname : ''}</p>
    </div>
  );
};

export default BodyContent;