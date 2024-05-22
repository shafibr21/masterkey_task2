import React, { useState } from 'react';
import './App.css';

const App = () => {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const [outputString, setOutputString] = useState('');

  const handleTileClick = (letter) => {
    let newString = outputString + letter;

    // Replace sequences of three or more identical letters with a single underscore
    newString = newString.replace(/(.)\1{2,}/g, '_');

    setOutputString(newString);
  };

  return (
    <div className="App">
      <div className="grid-container">
        {alphabet.map((letter) => (
          <div
            key={letter}
            className="tile"
            onClick={() => handleTileClick(letter)}
          >
            {letter}
          </div>
        ))}
      </div>
      <div id="outputString" className="output">
        {outputString}
      </div>
    </div>
  );
};

export default App;
