import React from "react";

const PlayerGame = ({round, setPlayerNumber, message, setRound, guessingAction}) => {
  return (
    <div>
      <h1>Write your number:</h1>
      <input onChange={(e) => setPlayerNumber(e.target.value)} />
      <p>round: {round}</p>
      <p>{message}</p>
      <button
        onClick={() => {
          setRound(round + 1);
          guessingAction();
        }}
      >submit
      </button>
    </div>
  );
};

export default PlayerGame;