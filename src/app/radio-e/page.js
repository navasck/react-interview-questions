'use client';
import React, { useState } from 'react';

function RadioExample() {
  const [selectedGender, setSelectedGender] = useState('');

  // Define your radio options as an array of objects
  const genderOptions = [
    { id: 'male', value: 'male', label: 'Male' },
    { id: 'female', value: 'female', label: 'Female' },
    { id: 'other', value: 'other', label: 'Other' },
  ];

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  return (
    <div className='flex flex-col justify-between px-14 py-9'>
      <h2>Radio Button Example</h2>
      <h3>Select your gender:</h3>

      {/* Map over the genderOptions array to render each radio button */}
      {genderOptions.map((option) => (
        <div key={option.id}>
          {' '}
          {/* Key prop is essential for list rendering */}
          <input
            type='radio'
            id={option.id}
            name='gender' // Still needs to be the same for the group
            value={option.value}
            checked={selectedGender === option.value}
            onChange={handleGenderChange}
          />
          <label htmlFor={option.id}>{option.label}</label>
        </div>
      ))}

      <p>Selected gender: {selectedGender || 'None'}</p>
    </div>
  );
}

export default RadioExample;