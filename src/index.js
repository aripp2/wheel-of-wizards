
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';
import './images/crystal.png';

import Game from './Game.js';
import domUpdates from './domUpdates';
import BonusRound from './BonusRound.js';

let game;
let bonusRound;


$('.start-game').prop('disabled', true);
$('.name-inputs').keyup(function() {
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
  game.makeNewRound(game.players[0]);

  domUpdates.updateCurrentPlayerName(game.round.currentPlayer.name);
  domUpdates.appendPuzzle(game.round.puzzle);
  $('.welcome-section').hide();
  domUpdates.enableSpinBtn();
}

$('.spin-btn').click((event) => {
  console.log(game.roundCounter)
  if(game.roundCounter <= 4){
  event.preventDefault();
  game.round.spinWheel();
  $('.spin-value').text(game.round.spinWheel());
  game.round.spinOptions();
  } else {
    event.preventDefault();
    bonusRound.spinWheel();
    $('.spin-value').text(bonusRound.spinWheel());
    bonusRound.guessOptions();
  }
})

$('.consonants').click((event) => {
  event.preventDefault();
  var guess = $(event.target).closest('.letter').text();
  console.log(guess);
  game.round.guessEvents(guess);
})

$('.buy-vowel-btn').click((event) => {
  event.preventDefault();
  domUpdates.enableVowels();
  domUpdates.disableUsedVowels(game.round.lettersUsed);
})

$('.vowels').click((event) => {
  event.preventDefault();
  var guess = $(event.target).closest('.vowel').text();
  console.log(guess);
  game.round.buyVowel(guess);
})

$('.solve-puzzle-btn').click((event) => {
  event.preventDefault();
  let playerGuess = $('.solve-puzzle-input').val();
  let result = game.round.solvePuzzle(playerGuess);
  $('.solve-puzzle-input').val('');
  if (result && game.roundCounter < 4) {
    let roundWinner = game.round.currentPlayer
    game.makeNewRound(roundWinner);
    domUpdates.appendPuzzle(game.round.puzzle);
  } else if (result && game.roundCounter === 4){
    domUpdates.updatePlayerScores(game.players);
    game.displayChampion();
  } else {
    game.round.findCurrentPlayer();
    domUpdates.updateCurrentPlayerName(game.round.currentPlayer.name);
  }
})

$('.champion').on('click', (event) => {
  if (event.target.className === 'bonus-round-button'){
  event.preventDefault();
  console.log('linked');
  bonusRound = new BonusRound(game.puzzles, game.wheel, game.players, game.returnChampion());
  console.log(bonusRound)
  domUpdates.appendBonusPuzzle(bonusRound.puzzle);
  }
})



