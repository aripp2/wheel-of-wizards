// This is the JavaScript entry file - your code begins here

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import Game from './Game.js';



  console.log('ready')
  let game;

$('.startGame').click((event) => {
  event.preventDefault();
  let player1 = $('#player1Input').val();
  let player2 = $('#player2Input').val();
  let player3 = $('#player3Input').val();
  game = new Game(player1, player2, player3);
  game.createPlayers();
  console.log('game', game)
})

function updatePlayer1
