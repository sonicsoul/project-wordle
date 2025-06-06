import React from 'react';

function GuessInput({handleSubmitGuess, gameStatus}) {
  const [tentativeGuess, setTentativeGuess] = React.useState('');
  return (
  <>
    <form 
      className="guess-input-wrapper" 
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmitGuess(tentativeGuess)
        setTentativeGuess('')
      }} 
      >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        type="text"
        disabled={gameStatus !== 'running'} 
        id="guess-input"
        pattern="[a-zA-Z]{5}"
        title="5 letter word"
        required
        value={tentativeGuess}
        onChange={(event) => {
          let nextGuess = event.target.value.toUpperCase();
          setTentativeGuess(nextGuess)
          
        }}
      />
      <button type="submit">Submit</button>
    </form>
  </>
)
}

export default GuessInput;
