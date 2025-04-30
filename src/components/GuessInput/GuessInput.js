import React from 'react';

function GuessInput() {
  const [guess, setGuess] = React.useState('');

  return (
  <>
    <form 
      className="guess-input-wrapper" 
      onSubmit={(event) => {
        event.preventDefault();
        
        console.log({guess});
        event.target.reset();
      }} 
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        id="guess-input"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        value={guess}
        onChange={(event) => {
          let input = event.target.value;
          setGuess(input.toUpperCase());
        }}
      />
      <button type="submit">Submit</button>
    </form>
  </>
)
}

export default GuessInput;
