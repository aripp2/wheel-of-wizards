fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// An example of how you import jQuery into a JS file if you use jQuery in that file
import $ from 'jquery';

// An example of how you tell webpack to use a CSS (SCSS) file
import './css/base.scss';

// An example of how you tell webpack to use an image (also need to link to it in the index.html)
// import './images/turing-logo.png'

import Game from './Game.js';
import domUpdates from './domUpdates';

let game;

$('.startGame').click((event) => {
  event.preventDefault();
  let player1 = $('#player1Input').val();
  let player2 = $('#player2Input').val();
  let player3 = $('#player3Input').val();
  game = new Game();
  // console.log(game);
  game.createPlayers(player1, player2, player3);
  updatePlayer1();
  updatePlayer2();
  updatePlayer3();
  game.makeNewRound();
  appendPuzzle();
})

$('.spinBtn').click((event) => {
  event.preventDefault();
  $('.spinValue').text(game.round.turn.spinWheel());
})
    


function updatePlayer1() {
  $('.player1Name').text(game.players[0].name);
  $('.player1Score').text(game.players[0].score);
  $('.player1Bank').text(game.players[0].bank);
}

function updatePlayer2() {
  $('.player2Name').text(game.players[1].name);
  $('.player2Score').text(game.players[1].score);
  $('.player2Bank').text(game.players[1].bank);
}

function updatePlayer3() {
  $('.player3Name').text(game.players[2].name);
  $('.player3Score').text(game.players[2].score);
  $('.player3Bank').text(game.players[2].bank);
}


function createPuzzle() {
  let list = `<div class="currentPuzzle">`
  let currentPuzzle = game.round.puzzle.correctAnswer.forEach(letter => {
    if (letter === '&' || letter === '-' || letter === '\'') {
      list += `<p class="puzzleContainer"><span class="puzzleCharacter symbol">${letter}</span></p>`; 
    } else if (letter === ' ') {
      list += `<p class="puzzleContainer space"><span class="puzzleCharacter">${letter}</span></p>`;
    } else {
      list += `<p class="puzzleContainer"><span class="puzzleCharacter ${letter}">${letter}</span></p>`; 
    } 
  })
  list += "</div>";
  return list;
}

function appendPuzzle() {
  $('.puzzleInputArea').html(`${createPuzzle()}`);
  $('.puzzleCharacter').hide();
  $('.symbol').show();
  $('.category').text(game.round.puzzle.category);
  $('.hint').text(game.round.puzzle.hint);
}

// function appendCategory() {
//   $('.category').text(game.round.puzzle.category);
// }

// function appendHint() {
//   $('.hint').text(game.round.puzzle.description);
// }
