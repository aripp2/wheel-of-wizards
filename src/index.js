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
  updatePlayer1();
  updatePlayer2();
  updatePlayer3();
  console.log('this', game)
  $('.puzzleInputArea').html(`${appendPuzzle()}`);

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


function appendPuzzle() {
  let list = `<div class="currentPuzzle">`
  let currentPuzzle = game.round.puzzle.correctAnswer.forEach(letter => {
      list += `<p class="puzzleCharacter">${letter}</p>`;  
  })
    list += "</div>";
    console.log('list', list)
    return list;
}
