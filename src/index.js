
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/crystal.png';

import Game from './Game.js';
import domUpdates from './domUpdates';

let game;


$('.startGame').prop('disabled', true);
$('.nameInputs').keyup(function() {
  if ($('.nameInputs').val() !== '') {
    $('.startGame').prop('disabled', false);
  }
});

$('.startGame').click((event) => {
  event.preventDefault();
  let player1 = $('#player1Input').val();
  let player2 = $('#player2Input').val();
  let player3 = $('#player3Input').val();
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
  $('.welcome-section').hide()
}

$('.spinBtn').click((event) => {
  event.preventDefault();
  game.round.spinWheel();
  $('.spinValue').text(game.round.spinWheel());
  game.round.spinOptions();
})

// $('.consonants').closest('button').attr('disabled', true)

$('.solvePuzzleButton').click((event) => {
  event.preventDefault();
  let playerGuess = $('.solvePuzzleInput').val()
  let result = game.round.solvePuzzle(playerGuess);
  console.log(result)
  if (result) {
    console.log('boom')
    game.makeNewRound();
    domUpdates.updateCurrentPlayerName(game.round.currentPlayer.name);
    console.log(game.round)
    domUpdates.appendPuzzle(game.round.puzzle);
  }
})



