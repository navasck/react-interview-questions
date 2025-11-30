'use client';
import React, { useState, useEffect } from 'react';


const emojiList = ['❤️', '🍀', '🌎', '🍎', '⚽️', '🚗', '⛵️', '💎'];

const shuffleArray = (array) => {
  const copy = [...array];

  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
};

const getShuffledEmojiCards = () => {
  const allValues = [...emojiList, ...emojiList];
  const shuffled = shuffleArray(allValues);
  return shuffled.map((emoji, index) => ({
    id: index,
    value: emoji,
    revealed: false,
    matched: false,
  }));
};

const MatchPairGame = () => {
  const [cards, setCards] = useState(getShuffledEmojiCards); // Each card: { id, value, revealed, matched }
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);
  const [disableAll, setDisableAll] = useState(false);

  useEffect(() => {
    // TODO: Shuffle the emoji list and initialize the cards array
    if (firstCard && secondCard) {
      const timeout = setTimeout(() => {
        if (firstCard.value === secondCard.value) {
          setCards((prev) =>
            prev.map((c) =>
              c.value === firstCard.value ? { ...c, matched: true } : c
            )
          );
        } else {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, revealed: false }
                : c
            )
          );
        }
        setFirstCard(null);
        setSecondCard(null);
        setDisableAll(false);
      }, 1000);
      return () => clearTimeout(timeout);
    }
  }, [firstCard, secondCard]);

  const handleClick = (card) => {
    // TODO: Handle card click logic here
    if (disableAll || card.revealed || card.matched) return;
    const updatedCards = cards.map((c) =>
      c.id === card.id ? { ...c, revealed: true } : c
    );
    setCards(updatedCards);

    if (!firstCard) {
      setFirstCard(card);
    } else if (!secondCard) {
      setSecondCard(card);
      setDisableAll(true);
      setMoves((m) => m + 1);
    }
  };

  useEffect(() => {
    const allmatched = cards.every((card) => card.matched);
    if (allmatched) {
      setWon(true);
    }
  }, [cards]);

  const resetGame = () => {
    // TODO: Reset the game to initial state
    setCards(getShuffledEmojiCards);
    setFirstCard(null);
    setSecondCard(null);
    setMoves(0);
    setWon(false);
    setDisableAll(false);
  };

  return (
    <div className='game-container'>
      <h1>Match Pair Game</h1>
      <div className='grid'>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${
              card.revealed || card.matched ? 'revealed' : ''
            } ${card.matched ? 'matched' : ''}`}
            onClick={() => handleClick(card)}
          >
            {(card.revealed || card.matched) && card.value}
          </div>
        ))}
      </div>
      <p>Moves: {moves}</p>
      {won && <p className='won'>🎉 You won!</p>}
      <button onClick={resetGame}>Reset</button>
    </div>
  );
};

export default MatchPairGame;
