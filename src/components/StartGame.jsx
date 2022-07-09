import React from 'react'

const StartGame = ({setPartyIsStart}) => {
  return (
    <button onClick={() => setPartyIsStart(true)}>Start</button>
  )
}

export default StartGame
