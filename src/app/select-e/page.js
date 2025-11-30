'use client';
import React, { useState } from 'react';

function SelectExample() {
  const [selectedCity, setSelectedCity] = useState('New York'); // Initial value for single select
  const [selectedCountries, setSelectedCountries] = useState([]); // Initial empty array for multi-select

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  const handleCountriesChange = (event) => {
    // For multiple select, event.target.value returns an array of selected values.
    // However, event.target.options is the most reliable way to get all selected options.

    console.log("event options",event.target.options);
    console.log("event value",event.target.value);



    const options = Array.from(event.target.options);
    const selectedValues = options
      .filter((option) => option.selected)
      .map((option) => option.value);
    setSelectedCountries(selectedValues);
  };

  return (
    <div className='flex flex-col justify-between px-14 py-9'>
      <h2>Select (Dropdown) Example</h2>

      {/* Single Select */}
      <h3>Select a city:</h3>
      <select value={selectedCity} onChange={handleCityChange}>
        <option value='New York'>New York</option>
        <option value='London'>London</option>
        <option value='Tokyo'>Tokyo</option>
        <option value='Paris'>Paris</option>
      </select>
      <p>Selected city: {selectedCity}</p>

      <hr />

      {/* Multiple Select */}
      <h3>Select countries you have visited (Ctrl/Cmd + click):</h3>
      <select
        multiple={true}
        value={selectedCountries}
        onChange={handleCountriesChange}
      >
        <option value='USA'>USA</option>
        <option value='Canada'>Canada</option>
        <option value='France'>France</option>
        <option value='Germany'>Germany</option>
        <option value='Japan'>Japan</option>
      </select>
      <p>Selected countries: {selectedCountries.join(', ') || 'None'}</p>
    </div>
  );
}

export default SelectExample;



// For multiple selects, the value prop expects an array, and event.target.options is used to get selected values.
