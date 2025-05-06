import React from 'react';
import './InstructionsModal.css';

export default function InstructionsModal({ onClose }) {
  return (
    <div className="instructions-overlay">
      <div className="instructions-box">
        <h1>Welcome to Connect Four!</h1>
        <h2>How to Play:</h2>
        <p>Take turns dropping tokens into the columns.</p>
        <p>First to connect 4 in a row (horizontal, vertical, or diagonal) wins!</p>
        <p>Click restart to start the game over.</p>
        <button onClick={onClose}>Got it!</button>
      </div>
    </div>
  );
}
