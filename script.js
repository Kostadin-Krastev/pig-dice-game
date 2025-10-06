'use strict';
// Selecting elements players score
const playerZeroScoreElement = document.getElementById('score--0');
const playerOneScoreElement = document.getElementById('score--1');

// Selecting dice image
const diceImageElement = document.querySelector('.dice');

// Starting conditions
playerZeroScoreElement.textContent = 0;
playerOneScoreElement.textContent = 0;
diceImageElement.classList.add('hidden');
