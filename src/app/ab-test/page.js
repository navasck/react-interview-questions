'use client';

import React, { useState, useEffect } from 'react';

const Interview = () => {

  const users = [
  { name: "Alice", age: 30 },
   { name: "Cat", age: 25 },
  { name: "Bob", age: 25 },
];

const arr1 = [
  { id: 1, x: 2, y: 3 },
  { id: 2, x: 3, y: 6 },
  { id: 3, x: 0, y: 0 },
  { id: 4, x: 0, y: 0 },
];
const arr2 = [
  { id: 2, x: 10, y: 20 },
  { id: 3, x: 10, y: 20 },
];


const categoryData = [
  {
    title: 'Electronics',
    subcategories: [
      'Smartphones',
      'Laptops',
      'Tablets',
      'Headphones',
      'Cameras',
      'Smartwatches',
      'TVs',
      'Speakers',
      'Accessories',
      'Gaming Consoles',
      'VR Headsets',
    ],
  },
  {
    title: 'Clothing',
    subcategories: [
      "Men's Shirts",
      "Women's Dresses",
      "Kids' Apparel",
      'Jeans',
      'T-shirts',
      'Sweaters',
      'Jackets',
      'Shoes',
      'Hats',
      'Socks',
      'Belts',
      'Scarves',
    ],
  },
  {
    title: 'Home & Kitchen',
    subcategories: [
      'Furniture',
      'Cookware',
      'Appliances',
      'Bedding',
      'Decor',
      'Lighting',
      'Storage',
      'Cleaning Supplies',
      'Bathroom Accessories',
      'Garden Tools',
    ],
  },
  {
    title: 'Books',
    subcategories: [
      'Fiction',
      'Non-Fiction',
      'Mystery',
      'Thriller',
      'Science Fiction',
      'Fantasy',
      'Biographies',
      'History',
      'Self-Help',
      'Cookbooks',
    ],
  },
  {
    title: 'Sports & Outdoors',
    subcategories: [
      'Running Shoes',
      'Camping Gear',
      'Fitness Equipment',
      'Cycling',
      'Swimming',
      'Team Sports',
      'Outdoor Clothing',
      'Fishing',
      'Hiking',
      'Yoga Mats',
    ],
  },
  {
    title: 'Electronics',
    subcategories: [
      'Smartphones',
      'Laptops',
      'Tablets',
      'Headphones',
      'Cameras',
      'Smartwatches',
      'TVs',
      'Speakers',
      'Accessories',
      'Gaming Consoles',
      'VR Headsets',
    ],
  },
  {
    title: 'Clothing',
    subcategories: [
      "Men's Shirts",
      "Women's Dresses",
      "Kids' Apparel",
      'Jeans',
      'T-shirts',
      'Sweaters',
      'Jackets',
      'Shoes',
      'Hats',
      'Socks',
      'Belts',
      'Scarves',
    ],
  },
  {
    title: 'Home & Kitchen',
    subcategories: [
      'Furniture',
      'Cookware',
      'Appliances',
      'Bedding',
      'Decor',
      'Lighting',
      'Storage',
      'Cleaning Supplies',
      'Bathroom Accessories',
      'Garden Tools',
    ],
  },
  {
    title: 'Books',
    subcategories: [
      'Fiction',
      'Non-Fiction',
      'Mystery',
      'Thriller',
      'Science Fiction',
      'Fantasy',
      'Biographies',
      'History',
      'Self-Help',
      'Cookbooks',
    ],
  },
  {
    title: 'Sports & Outdoors',
    subcategories: [
      'Running Shoes',
      'Camping Gear',
      'Fitness Equipment',
      'Cycling',
      'Swimming',
      'Team Sports',
      'Outdoor Clothing',
      'Fishing',
      'Hiking',
      'Yoga Mats',
    ],
  },
];



// output
// [
//   { id: 1, x: 2, y: 3 },
//   { id: 2, x: 10, y: 20 },
//   { id: 3, x: 0, y: 0 },
// ];



 const sorteddUsersByName = users.sort((a, b) => a.name.localeCompare(b.name));



 function mergeArraysByIdUsingArray(arr1, arr2) {
   const mergedArray = [...arr1]; // Start with a copy of arr1

   for (const item2 of arr2) {
     const existingIndex = mergedArray.findIndex(
       (item1) => item1.id === item2.id
     );

     if (existingIndex !== -1) {
       // If an item with the same ID exists in mergedArray, replace it
       mergedArray[existingIndex] = item2;
     } else {
       // If the ID doesn't exist, add the item from arr2 to mergedArray
       mergedArray.push(item2);
     }
   }

   return mergedArray;
 };

 const outputArray = mergeArraysByIdUsingArray(arr1, arr2);
 console.log('outputArray :', outputArray);

 console.log("Sorted Users by Name:", sorteddUsersByName);


  return (
    <>
      <div className='category-container'>
        {categoryData.map((category) => (
          <div key={category.title} className='main-category'>
            <h3>{category.title}</h3>
            <div className='sub-category-grid'>
              {category.subcategories.map((subcategory, index) => (
                <div key={index} className='sub-category-item'>
                  {subcategory}
                </div>
              ))}
            </div>
          </div>
        ))}
        <style jsx>{`
          .category-container {
            display: flex;

            gap: 20px; /* Spacing between main categories */
            padding: 20px;
            flex-wrap: wrap;
          }

          .main-category {
            /* Styles for each main category section */
            margin-bottom: 15px;
            flex-basis: calc(20% - 20px);
          }

          .sub-category-grid {
            flex-wrap: wrap; /* Allow items to wrap to the next line */
            gap: 10px; /* Spacing between sub-category items */
          }

          .sub-category-item {
            flex-basis: calc(
              20% - 10px
            ); /* Each item tries to take roughly 20% width (for 5 items), minus the gap */
            box-sizing: border-box; /* Include padding and border in the element's total width and height */
            padding: 10px;
            border: 1px solid #ccc;
            text-align: center;
          }

          /* Optional styling for responsiveness */
          @media (max-width: 768px) {
            .sub-category-item {
              flex-basis: calc(
                33.33% - 10px
              ); /* Adjust for smaller screens (e.g., 3 items per row) */
            }
          }

          @media (max-width: 480px) {
            .sub-category-item {
              flex-basis: calc(
                50% - 10px
              ); /* Adjust for even smaller screens (e.g., 2 items per row) */
            }
          }
        `}</style>
      </div>
    </>
  );
};

export default Interview;
