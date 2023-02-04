import React from 'react';
import './Header.css';

export default function Header({setSingleMovie}) {

  function handleClick() {
    setSingleMovie('')
  }

  return (
    <header>
        {/* <img alt="tomato icon"/> */}
        <h1>🍅 Rancid Tomatillos</h1>
        <button onClick={handleClick}>Home</button>
    </header>
  )
}
