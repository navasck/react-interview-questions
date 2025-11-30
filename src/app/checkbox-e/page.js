'use client';
import React, { useState } from 'react';

function CheckboxExample() {
  const [agreedToTerms, setAgreedToTerms] = useState(false);
  const [selectedFruits, setSelectedFruits] = useState([]);

  // Define your fruit options as an array of objects
  const fruitOptions = [
    { id: 'apple', value: 'apple', label: 'Apple' },
    { id: 'banana', value: 'banana', label: 'Banana' },
    { id: 'orange', value: 'orange', label: 'Orange' },
    // You can easily add more fruits here without changing the JSX structure
    { id: 'grape', value: 'grape', label: 'Grape' },
    { id: 'kiwi', value: 'kiwi', label: 'Kiwi' },
  ];

  const handleTermsChange = (event) => {
    setAgreedToTerms(event.target.checked);
  };

  const handleFruitChange = (event) => {
    const fruitName = event.target.value;
    const isChecked = event.target.checked;

    setSelectedFruits((prevFruits) => {
      if (isChecked) {
        // Add the fruit if it's checked and not already in the array
        return [...prevFruits, fruitName];
      } else {
        // Remove the fruit if it's unchecked
        return prevFruits.filter((fruit) => fruit !== fruitName);
      }
    });
  };

  return (
    <div className='flex flex-col justify-between px-14 py-9'>
      <h2>Checkbox Example</h2>
      {/* Single Checkbox (still good as-is, but could be put in an array too if desired) */}
      <div>
        <input
          type='checkbox'
          id='terms'
          checked={agreedToTerms} // Controlled by state
          onChange={handleTermsChange} // Update state on change
          style={{
            accentColor: 'green',
          }}
        />
        <label htmlFor='terms'>I agree to the terms and conditions</label>
        <p>Agreed: {agreedToTerms ? 'Yes' : 'No'}</p>
      </div>
      <hr className='my-4' /> {/* Added margin for better visual separation */}
      {/* Multiple Checkboxes - Refactored to use mapping */}
      <h3>Select your favorite fruits:</h3>
      {fruitOptions.map((fruit) => (
        <div key={fruit.id} className='mb-2'>
          {' '}
          {/* Added margin-bottom for spacing */}
          <input
            type='checkbox'
            id={fruit.id}
            value={fruit.value}
            checked={selectedFruits.includes(fruit.value)}
            onChange={handleFruitChange}
          />
          <label htmlFor={fruit.id} className='ml-2'>
            {fruit.label}
          </label>{' '}
          {/* Added margin-left for spacing */}
        </div>
      ))}
      <p className='mt-4'>
        Selected fruits: {selectedFruits.join(', ') || 'None'}
      </p>
    </div>
  );
}

export default CheckboxExample;
