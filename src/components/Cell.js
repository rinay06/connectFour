import React from 'react';
import './Cell.css';

export default function Cell({ value, onClick }) {
  let color = '';
  if (value === 'Pink') color = 'pink';
  if (value === 'Blue') color = 'blue';

  return (
    <div className={`cell ${color}`} onClick={onClick}></div>
  );
}
