import React from 'react';
import styles from './ResponsiveGrid.module.css'; // Import the CSS Module

function ResponsiveGrid() {
  // Generate some dummy data for our cards
  const cardData = Array.from({ length: 15 }, (_, i) => ({
    id: i + 1,
    title: `Card ${i + 1}`,
    description: `This is the description for card number ${
      i + 1
    }. It showcases how the grid items behave.`,
    color: `hsl(${i * 20}, 70%, 80%)`, // Just for varying background colors
  }));

  return (
    <div>
      <header className={styles.AppHeader}>
        {' '}
        {/* Use styles.AppHeader */}
        <h1>Responsive Grid Example (Next.js CSS Modules)</h1>
        <p>Resize your browser window to see the grid adapt!</p>
      </header>
      <main className={styles.gridContainer}>
        {' '}
        {/* Use styles.gridContainer */}
        {cardData.map((card) => (
          <div
            key={card.id}
            className={styles.gridItem}
            style={{ backgroundColor: card.color }}
          >
            {' '}
            {/* Use styles.gridItem */}
            <h2>{card.title}</h2>
            <p>{card.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </main>
    </div>
  );
}

export default ResponsiveGrid;
