import React from "react";
import StartGame from "../components/StartGame";
import EndGame from "../components/EndGame";
import PlayerGame from "../components/PlayerGame";
import { randomRange } from "../utils/random";

const Game = () => {
  const [partyIsStarted, setPartyIsStart] = React.useState(false);
  const [numberIsFound, setNumberIsFound] = React.useState(false);
  const [round, setRound] = React.useState(1);
  const [randomNumber, setRandomNumber] = React.useState(randomRange(0, 100));
  const [message, setMessage] = React.useState("");
  const [playerNumber, setPlayerNumber] = React.useState();

  const resetGame = () => {
    setRound(1);
    setMessage("");
    setRandomNumber(randomRange(0, 100));
    setPlayerNumber();
    setPartyIsStart(false);
    setNumberIsFound(false);
  };

  const guessingAction = () => {
    if (parseInt(playerNumber) === randomNumber) {
      setNumberIsFound(true);
    } else if (playerNumber < randomNumber) {
      setMessage(`Greater than ${playerNumber}`);
    } else {
      setMessage(`Lower than ${playerNumber}`);
    }
  };

  return (
    <div>
      {partyIsStarted ? (
        numberIsFound ? (
          <EndGame
            round={round}
            playerNumber={playerNumber}
            resetGame={resetGame}
          />
        ) : (
          <PlayerGame round={round} setPlayerNumber={setPlayerNumber} message={message} setRound={setRound} guessingAction={guessingAction}/>
        )
      ) : (
        <StartGame setPartyIsStart={setPartyIsStart} />
      )}
    </div>
  );
};

export default Game;
