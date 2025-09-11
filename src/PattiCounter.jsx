import React, { useState } from "react";
import "./PattiCounter.css"; // Import CSS

const PattiCounter = () => {
  const suits = ["♥️", "♣️", "♦️", "♠️"];
  // const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const values = ["A", "K", "Q", "J", "10", "9", "8", "7", "6", "5", "4", "3", "2"];

  // Generate all 52 cards dynamically
  const allCards = suits.flatMap((suit) =>
    values.map((value) => `${value}${suit}`)
  );

  const [clickedCards, setClickedCards] = useState([]);

  const handleCardClick = (card) => {
    if (!clickedCards.includes(card)) {
      setClickedCards((prev) => [...prev, card]);
    }
  };

  const resetCount = () => {
    setClickedCards([]);
  };

  return (
    <div className="app-container">
      <h1>52 Patti Counter</h1>

      {/* Cards Container */}
      <div className="cards-container">
        {allCards.map((card, index) => (
          <div
            key={index}
            className={`card ${clickedCards.includes(card) ? "clicked" : ""}`}
            onClick={() => handleCardClick(card)}
          >
            {card}
            {clickedCards.includes(card) && <span className="cross">🚫</span>}
          </div>
        ))}
      </div>

      {/* Counter */}
      <div className="count">
        <p>
          Total Patti Count: <span>{clickedCards.length}</span>
        </p>
      </div>

      {/* Reset Button */}
      <button onClick={resetCount}>Reset Count</button>
    </div>
  );
};

export default PattiCounter;
