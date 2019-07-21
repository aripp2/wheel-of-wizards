
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/crystal.png';

import Game from './Game.js';
import domUpdates from './domUpdates';

let game;


$('.start-game').prop('disabled', true);
$('.name-inputs').keyup(function() {
  // if ($('.name-inputs').val() !== '') {
  if ($('.player-1-input').val() !== '' && $('.player-2-input').val() !== '' && $('.player-3-input').val() !== '') {
    $('.start-game').prop('disabled', false);
  }
});

$('.start-game').click((event) => {
  event.preventDefault();
  let player1 = $('#player-1-input').val();
  let player2 = $('#player-2-input').val();
  let player3 = $('#player-3-input').val();
  fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
  .then(response => response.json())
  .then(data => startGame(data.data, player1, player2, player3 ))
  .catch(error => console.log(error));
})

function startGame(data, player1, player2, player3 ) {
  game = new Game(data);
  game.createPlayers(player1, player2, player3);
  game.makeNewRound();

  domUpdates.updateCurrentPlayerName(game.round.currentPlayer.name);
  domUpdates.appendPuzzle(game.round.puzzle);
  $('.welcome-section').hide();
  domUpdates.enableSpinBtn();
}

$('.spin-btn').click((event) => {
  event.preventDefault();
  game.round.spinWheel();
  $('.spin-value').text(game.round.spinWheel());
  game.round.spinOptions();
})

$('.consonants').click((event) => {
  event.preventDefault();
  var guess = $(event.target).closest('.letter').text();
  console.log(guess);
  game.round.guessEvents(guess);
})

$('.solve-puzzle-btn').click((event) => {
  event.preventDefault();
  let playerGuess = $('.solve-puzzle-input').val()
  let result = game.round.solvePuzzle(playerGuess);
  console.log(result)
  if (result) {
    game.makeNewRound();
    domUpdates.updateCurrentPlayerName(game.round.currentPlayer.name);
    domUpdates.appendPuzzle(game.round.puzzle);
  }
})



