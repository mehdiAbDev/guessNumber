# Guessing Game

This is a simple guessing game implemented in JavaScript. The game allows the user to guess a randomly generated number and provides feedback based on the correctness of the guess. The game also supports keyboard interactions for convenience.

## How to Play

1. Open the game in a web browser.
2. The game will display a random number between 1 and 20.
3. Enter your guess into the input field and click the "Check!" button or press the Enter key.
4. The game will provide feedback on your guess:
   - If your guess is correct, the box will change color and display "Correct ✅".
   - If your guess is incorrect, the game will indicate whether you should go up or down.
5. Continue guessing until you find the correct number or run out of chances.
6. You can reset the game by clicking the "Again" button or pressing the "r" key on your keyboard.

## Code Overview

The code is organized into several functions to handle different aspects of the game. Here's a brief overview of each function:

- `setRandom`: Generates a new random number between 1 and 20.
- `display`: Updates the message displayed on the screen.
- `resetGame`: Resets the game to its initial state, including resetting the random number, score, and message.
- `checkNumber`: Checks the user's guess against the random number and provides feedback.
- Event Listeners:
  - `theGuessInput`: Listens for the Enter key press and triggers the `checkNumber` function.
  - `document`: Listens for the "r" key press and triggers the `resetGame` function.
  - `checkBtn`: Listens for the "Check!" button click and triggers the `checkNumber` function.
  - `againBtn`: Listens for the "Again" button click and triggers the `resetGame` function.

Feel free to modify and enhance the code to fit your specific requirements or to improve the game's functionality.

Have fun playing the guessing game!
