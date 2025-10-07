'use strict';
// Selecting elements players score
const playerZeroScoreElement = document.getElementById('score--0');
const playerOneScoreElement = document.getElementById('score--1');

// Selecting elements for current score
const currentScorePlayerZeroElement = document.getElementById('current--0');
const currentScorePlayerOneElement = document.getElementById('current--1');

// Selecting dice image elements
const diceImageElement = document.querySelector('.dice');

// Selecting button elements
const buttonNewGameElement = document.querySelector('.btn--new');
const buttonRollDiceElement = document.querySelector('.btn--roll');
const buttonHoldElement = document.querySelector('.btn--hold');

// Starting conditions
playerZeroScoreElement.textContent = 0;
playerOneScoreElement.textContent = 0;
diceImageElement.classList.add('hidden');

// Storing the score
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling the dice functionality
buttonRollDiceElement.addEventListener('click', function () {
  // 1. Generating random dice roll
  const diceNumber = Math.trunc(Math.random() * 6) + 1;

  // 2. Display the dice
  diceImageElement.classList.remove('hidden');
  diceImageElement.src = `images/dice-${diceNumber}.png`;

  // 3. Check for rolled 1
  if (diceNumber !== 1) {
    // Add dice number to the current score
    currentScore = currentScore + diceNumber; //currentScore += diceNumber;
    const liveScore = (document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore);
  } else {
    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;
  }
});
