# Guess my number

Fork this and write a little application "Guess my number"

## Home screen

- Button Start Game

On Click on Start Button, the game choose a number between 1 & 100 and move to next screen

## Play screen

- Game indication, saying either:
  - "Type your number"on first round
  - "Greater than X" or "Lower than X" when user has submitted a number (X is the typed number)
- An input where user type its number
- A submit button to validate the round
- A counter to indicate which round it is

- BONUS: Typing ENTER should validate the round

After each submission, we check if user has guessed the chosen number, and reset the input value. If not, displays same screen, if guessed, display Congratulation Screen

## Congratulation screen

- Display a message "Congratulations, you've found X in Y turns". Where X is the number guessed, and Y the number of rounds
- A button to start again
- On click on restart button, we choose a new random number, reset the counters, and restart game