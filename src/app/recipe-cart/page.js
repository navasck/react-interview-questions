'use client';

import React, { useState } from 'react';
import styles from './RecipeFilterApp.module.css';

const recipesData = [
  {
    id: 1,
    name: 'Classic Margherita Pizza',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
    rating: 4.6,
    reviewCount: 98,
  },
  {
    id: 2,
    name: 'Vegetarian Stir-Fry',
    cuisine: 'Asian',
    image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
    rating: 2.7,
    reviewCount: 26,
  },
  {
    id: 3,
    name: 'Chocolate Chip Cookies',
    cuisine: 'American',
    image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
    rating: 1.9,
    reviewCount: 13,
  },
  {
    id: 4,
    name: 'Chicken Alfredo Pasta',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/4.webp',
    rating: 4.9,
    reviewCount: 82,
  },
  {
    id: 5,
    name: 'Mango Salsa Chicken',
    cuisine: 'Mexican',
    image: 'https://cdn.dummyjson.com/recipe-images/5.webp',
    rating: 4.9,
    reviewCount: 63,
  },
  {
    id: 6,
    name: 'Quinoa Salad with Avocado',
    cuisine: 'Mediterranean',
    image: 'https://cdn.dummyjson.com/recipe-images/6.webp',
    rating: 4.4,
    reviewCount: 59,
  },
  {
    id: 7,
    name: 'Tomato Basil Bruschetta',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/7.webp',
    rating: 3.7,
    reviewCount: 95,
  },
  {
    id: 8,
    name: 'Beef and Broccoli Stir-Fry',
    cuisine: 'Asian',
    image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
    rating: 4.7,
    reviewCount: 58,
  },
  {
    id: 9,
    name: 'Caprese Salad',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/9.webp',
    rating: 2.6,
    reviewCount: 82,
  },
  {
    id: 10,
    name: 'Shrimp Scampi Pasta',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/10.webp',
    rating: 1.3,
    reviewCount: 5,
  },
  {
    id: 11,
    name: 'Classic Margherita Pizza',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/1.webp',
    rating: 1.6,
    reviewCount: 18,
  },
  {
    id: 12,
    name: 'Vegetarian Stir-Fry',
    cuisine: 'Asian',
    image: 'https://cdn.dummyjson.com/recipe-images/2.webp',
    rating: 1.7,
    reviewCount: 26,
  },
  {
    id: 13,
    name: 'Chocolate Chip Cookies',
    cuisine: 'American',
    image: 'https://cdn.dummyjson.com/recipe-images/3.webp',
    rating: 4.9,
    reviewCount: 13,
  },
  {
    id: 14,
    name: 'Chicken Alfredo Pasta',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/4.webp',
    rating: 5,
    reviewCount: 82,
  },
  {
    id: 15,
    name: 'Mango Salsa Chicken',
    cuisine: 'Mexican',
    image: 'https://cdn.dummyjson.com/recipe-images/5.webp',
    rating: 3.9,
    reviewCount: 63,
  },
  {
    id: 16,
    name: 'Quinoa Salad with Avocado',
    cuisine: 'Mediterranean',
    image: 'https://cdn.dummyjson.com/recipe-images/6.webp',
    rating: 3.4,
    reviewCount: 59,
  },
  {
    id: 17,
    name: 'Tomato Basil Bruschetta',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/7.webp',
    rating: 1.7,
    reviewCount: 95,
  },
  {
    id: 18,
    name: 'Beef and Broccoli Stir-Fry',
    cuisine: 'Asian',
    image: 'https://cdn.dummyjson.com/recipe-images/8.webp',
    rating: 4.7,
    reviewCount: 58,
  },
  {
    id: 19,
    name: 'Caprese Salad',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/9.webp',
    rating: 3.6,
    reviewCount: 82,
  },
  {
    id: 20,
    name: 'Shrimp Scampi Pasta',
    cuisine: 'Italian',
    image: 'https://cdn.dummyjson.com/recipe-images/10.webp',
    rating: 2.3,
    reviewCount: 5,
  },
];

const RecipeFilterApp = () => {
  const [minRating, setMinRating] = useState(4);
  const [cart, setCart] = useState([]);

  const filterRecipes = recipesData.filter(
    (recipe) => recipe.rating >= minRating
  );

  const averageRating =
    filterRecipes.reduce((sum, recipe) => sum + recipe.rating, 0) /
    (filterRecipes.length || 1);

  const addTocart = (recipe) => {
    setCart((prev) => [...prev, recipe]);
  };

  const totalCartItems = cart.length;

  return (
    <div className={`${styles.appContainer} px-3 py-3 md:px-14 md:py-9`}>
      <h1 className={styles.filterCartSectionTitle}>🍽️ Recipe Explorer</h1>
      <div className={styles.filterCartSection}>
        <div
          style={{
            display: 'flex',
            gap: '10px',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <label htmlFor='ratingFilter'>Filter by Rating</label>
          <select
            id='ratingFilter'
            className={styles.ratingFilter}
            value={minRating}
            onChange={(e) => setMinRating(parseFloat(e.target.value))}
          >
            <option value={1.0}>1.0+</option>
            <option value={2.0}>2.0+</option>
            <option value={2.5}>2.5+</option>
            <option value={3.5}>3.5+</option>
            <option value={4.0}>4.0+</option>
            <option value={4.5}>4.5+</option>
            <option value={4.9}>4.9+</option>
          </select>
        </div>
        <h3 className={styles.cartItems}>🛒 Cart Items: {totalCartItems}</h3>
      </div>

      <h3
        style={{
          textAlign: 'center',
          margin: '10px 0 10px 0px',
          fontSize: '1.2rem',
          color: '#333',
        }}
      >
        Average Rating: {averageRating.toFixed(2)} ({filterRecipes.length}{' '}
        recipes){' '}
      </h3>

      <div className={styles.recipeCardsContainer}>
        {filterRecipes.map((recipe) => (
          <div key={recipe.id} className={styles.recipeCard}>
            <img
              src={recipe.image}
              alt={recipe.name}
              className={styles.recipeCardImg}
            />

            <h4>{recipe.name}</h4>
            <p>Cuisine: {recipe.cuisine}</p>
            <p>
              Rating: {recipe.rating} ({recipe.reviewCount}) reviews
            </p>
            <button
              className={styles.cartButton}
              onClick={() => addTocart(recipe)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFilterApp;
