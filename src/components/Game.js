import React, { useState } from 'react';
import Board from './Board';
import '../App.css';

const ROWS = 6;
const COLUMNS = 7;
const EMPTY = '-';
const PLAYER_ONE = 'Pink';
const PLAYER_TWO = 'Blue';

export default function Game() {
  const [board, setBoard] = useState(
    Array(ROWS).fill(null).map(() => Array(COLUMNS).fill(EMPTY))
  );
  const [currentPlayer, setCurrentPlayer] = useState(PLAYER_ONE);
  const [winner, setWinner] = useState(null);

  const dropToken = (column) => {
    if (winner) return;

    const newBoard = board.map(row => [...row]);
    for (let row = ROWS - 1; row >= 0; row--) {
      if (newBoard[row][column] === EMPTY) {
        newBoard[row][column] = currentPlayer;
        checkWinner(newBoard, row, column);
        setBoard(newBoard);
        setCurrentPlayer(currentPlayer === PLAYER_ONE ? PLAYER_TWO : PLAYER_ONE);
        break;
      }
    }
  };

  const checkWinner = (b, row, col) => {
    const directions = [[1, 0], [0, 1], [1, 1], [1, -1]];
    const player = b[row][col];

    for (let [dx, dy] of directions) {
      let count = 1;
      for (let d of [-1, 1]) {
        let r = row + d * dx;
        let c = col + d * dy;
        while (
          r >= 0 && r < ROWS &&
          c >= 0 && c < COLUMNS &&
          b[r][c] === player
        ) {
          count++;
          r += d * dx;
          c += d * dy;
        }
      }
      if (count >= 4) {
        setWinner(player);
        return;
      }
    }
  };

  const restartGame = () => {
    setBoard(Array(ROWS).fill(null).map(() => Array(COLUMNS).fill(EMPTY)));
    setCurrentPlayer(PLAYER_ONE);
    setWinner(null);
  };


  return (
    <div>
      <h1>Connect Four</h1>
      <p>{winner ? `Player ${winner} wins!` : `Current Player: ${currentPlayer}`}</p>
      <Board board={board} onColumnClick={dropToken} />
      <button onClick={restartGame}>Restart</button>
    </div>
  );
}
