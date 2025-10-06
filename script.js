'use strict';
// Selecting elements players score
const playerZeroScoreElement = document.getElementById('score--0');
const playerOneScoreElement = document.getElementById('score--1');

// Selecting dice image elements
const diceImageElement = document.querySelector('.dice');

// Selecting button elements
const buttonNewGameElement = document.querySelector('.btn--new');
const buttonRollDiceElement = document.querySelector('.btn-roll');
const buttonHoldElement = document.querySelector('.btn--hold');

// Starting conditions
playerZeroScoreElement.textContent = 0;
playerOneScoreElement.textContent = 0;
diceImageElement.classList.add('hidden');
