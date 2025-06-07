import React from 'react';

import GuessInput from '../GuessInput';
import GuessResults from '../GuessResults';
import WonBanner from '../WonBanner'
import LostBanner from '../LostBanner'

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants'
import { checkGuess } from '../../game-helpers';
import Keyboard from '../Keyboard';

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [gameStatus, setGameStatus] = React.useState('running')
  const [answer, setAnswer] = React.useState(() => sample(WORDS))
console.info({ answer });
  function handleSubmitGuess(tentativeGuess){
    const nextGuesses = [...guesses, tentativeGuess]
    setGuesses(nextGuesses)

    if (tentativeGuess == answer){
      setGameStatus('won')
    } else if (nextGuesses.length >= NUM_OF_GUESSES_ALLOWED){
      setGameStatus('lost')
    } 
  }

  function handleRestart(){
    const newAnswer = sample(WORDS);
    setAnswer(newAnswer);
    setGuesses([]);
    setGameStatus('running');
  }

  const validatedGuesses = guesses.map((guess) => checkGuess(guess, answer))

  return  (
    <> 
      <GuessResults validatedGuesses={validatedGuesses} /> 
      <GuessInput handleSubmitGuess={handleSubmitGuess} gameStatus={gameStatus}/>
      <Keyboard validatedGuesses={validatedGuesses} />
      {
        gameStatus === 'won' && ( <WonBanner numOfGuesses={guesses.length} handleRestart={handleRestart}/>)
      }
      {
        gameStatus === 'lost' && ( <LostBanner answer={answer} handleRestart={handleRestart}/>)
      }
    </>
  )
}

export default Game;
