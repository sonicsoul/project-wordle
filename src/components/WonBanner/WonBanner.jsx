import React from 'react';
import Banner from '../Banner'

function WonBanner({numOfGuesses, handleRestart}) {
  return (
    <Banner
      status="happy"
      action={handleRestart}
      actionText="Restart game"
    >
      <p>
        <strong>Congrats!</strong> You got it in {' '}
        <strong>
          {numOfGuesses === 1 ? '1 guess' : `${numOfGuesses} guesses`}
        </strong>
      </p>
    </Banner>
  )
}

export default WonBanner;
