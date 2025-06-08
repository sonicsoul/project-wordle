import React from 'react';

const ROWS = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
];

function getStatusByLetter(validatedGuesses) {
  const statusObj = {};

  // these are all the letters used in previously made guesses  
  const allLetters = validatedGuesses.flat();
  
  allLetters.forEach(({ letter, status }) => {
    const currentStatus = statusObj[letter];  
    // If currentStatus is undefined, there was no status for that specific letter before. 
    // so add a new key/value pair to the statusObj for that letter > {letter:letter , status:status} 
    // then, return to the next letter
    if (currentStatus === undefined) {
      statusObj[letter] = status;
      return;
    }
  
    const STATUS_RANKS = {
      correct: 1,
      misplaced: 2,
      incorrect: 3,
    };

    const currentStatusRank = STATUS_RANKS[currentStatus];
    const newStatusRank = STATUS_RANKS[status];

    if (newStatusRank < currentStatusRank) {
      statusObj[letter] = status;
    }
  });
  
  return statusObj;
}

const Keyboard = ({ validatedGuesses }) => {
  const statusByLetter = getStatusByLetter(validatedGuesses);
  return (
    <div className="keyboard">
      {ROWS.map((row, index) => (
        <div className="keyboard-row" key={index}>
          {row.map((letter) => (
            <div
              key={letter}
              className={`letter ${statusByLetter[letter] || ''}`}
            >
              {letter}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Keyboard;