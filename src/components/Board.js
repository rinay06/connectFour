import React from 'react';
import Cell from './Cell';
import './Board.css';

export default function Board({ board, onColumnClick }) {
  return (
    <div className="board">
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => (
          <Cell
            key={`${rowIndex}-${colIndex}`}
            value={cell}
            onClick={() => onColumnClick(colIndex)}
          />
        ))
      )}
    </div>
  );
}
