'use strict';
// Selecting elements for the players
const playerZeroElement = document.querySelector('.player--0');
const playerOneElement = document.querySelector('.player--1');

// Selecting elements for players score
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

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  // Storing the score
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  // variable if the game is still played or somebody won it
  playing = true;

  // UI elements
  playerZeroScoreElement.textContent = 0;
  playerOneScoreElement.textContent = 0;
  diceImageElement.classList.add('hidden');
  currentScorePlayerZeroElement.textContent = 0;
  currentScorePlayerOneElement.textContent = 0;

  // Player states elements
  playerZeroElement.classList.remove('player--winner');
  playerOneElement.classList.remove('player--winner');

  playerZeroElement.classList.add('player--active');
  playerOneElement.classList.remove('player--active');
};
init();

// Switch to next player function
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerZeroElement.classList.toggle('player--active');
  playerOneElement.classList.toggle('player--active');
};

// Rolling the dice functionality
buttonRollDiceElement.addEventListener('click', function () {
  if (playing) {
    // 1. Generating random dice roll
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display the dice
    diceImageElement.classList.remove('hidden');
    diceImageElement.src = `images/dice-${diceNumber}.png`;

    // 3. Check for rolled 1
    if (diceNumber !== 1) {
      // Add dice number to the current score
      currentScore = currentScore + diceNumber; //currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // Switch to next player
      switchPlayer();
    }
  }
});

// Holding the score functionality when HOLD button is pressed
buttonHoldElement.addEventListener('click', function () {
  if (playing) {
    //1. Add current score to active player's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    // 2. Check player's score is >= 100
    if (scores[activePlayer] >= 100) {
      // Finish the game
      playing = false;
      diceImageElement.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      // Switch to the next player
      switchPlayer();
    }
  }
});

// Resetting the game
buttonNewGameElement.addEventListener('click', init);
