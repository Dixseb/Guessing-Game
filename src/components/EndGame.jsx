import React from 'react';

const EndGame = ({ round, playerNumber, resetGame }) => {
  return (
    <div>
      <p>You WIN !</p>
      <p>Number guessed: {playerNumber}</p>
      <p>Round: {round}</p>
      <button onClick={() => resetGame() }>Reset</button>
    </div>
  )
}

export default EndGame;