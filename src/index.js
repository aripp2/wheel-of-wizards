import $ from "jquery";

import "./css/base.scss";
import "./images/crystal.png";
import "./images/scroll.svg";

import Game from "./Game.js";
import BonusRound from "./BonusRound.js";
import domUpdates from "./domUpdates";

let game;
let bonusRound;

$(".start-game").prop("disabled", true);
$(".name-inputs").keyup(function() {
  if (
    $(".player-1-input").val() !== "" &&
    $(".player-2-input").val() !== "" &&
    $(".player-3-input").val() !== ""
  ) {
    $(".start-game").prop("disabled", false);
  }
});

$(".start-game").click(event => {
  event.preventDefault();
  let player1 = $("#player-1-input").val();
  let player2 = $("#player-2-input").val();
  let player3 = $("#player-3-input").val();
  fetch(
    "https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data"
  )
    .then(response => response.json())
    .then(data => startGame(data.data, player1, player2, player3))
    .catch(error => console.log(error));
});

function startGame(data, player1, player2, player3) {
  game = new Game(data);
  game.createPlayers(player1, player2, player3);
  game.makeNewRound(game.players[0]);
  domUpdates.updateCurrentPlayerName(game.round.currentPlayer.name);
  domUpdates.appendPuzzle(game.round.puzzle);
  $('.welcome-section').slideUp('slow');
  domUpdates.enableSpinBtn();
  $('.instructions').show();
  $('.quit-game').show();
  $('.game-header').fadeIn(3000); 
}

$(".spin-btn").click(event => {
  event.preventDefault();
  domUpdates.disableSpinBtn();
  domUpdates.enableConsonants();
  if (game.roundCounter <= 4) {
    domUpdates.disableUsedConsonants(game.round.lettersUsed);
    game.round.spinWheel();
    $('.spin-value').text(game.round.spinWheel());
    game.round.spinOptions();
  } else {
    bonusRound.spinWheel();
    $(".spin-value").text(bonusRound.spinWheel());
    domUpdates.enableConsonants();
    bonusRound.guessOptions();
  }
});

$(".consonants").click(event => {
  event.preventDefault();
  if (game.roundCounter <= 4) {
    domUpdates.enableSpinBtn();
    var guess = $(event.target)
      .closest(".letter")
      .text();
    console.log(guess);
    game.round.guessEvents(guess);
    domUpdates.clearSpinValue();
    domUpdates.disableConsonants();
  } else {
    let guess = $(event.target)
      .closest(".letter")
      .text();
    domUpdates.appendLetter(guess);
    bonusRound.lettersPicked.push(guess);
    domUpdates.disableUsedConsonants(bonusRound.lettersPicked);
    console.log(bonusRound.lettersPicked);
    if (bonusRound.lettersPicked.length === 3) {
      domUpdates.disableConsonants();
      domUpdates.showPlayersBonusRoundGuess(
        bonusRound.puzzle,
        bonusRound.lettersPicked
      );
    }
  }
});

$(".buy-vowel-btn").click(event => {
  event.preventDefault();
  domUpdates.enableVowels();
  domUpdates.disableUsedVowels(game.round.lettersUsed);
});

$(".vowels").click(event => {
  if (game.roundCounter <= 4) {
    event.preventDefault();
    var guess = $(event.target)
      .closest(".vowel")
      .text();
    game.round.buyVowel(guess);
  } else {
    var guess = $(event.target)
      .closest(".vowel")
      .text();
    bonusRound.lettersPicked.push(guess);
    console.log(bonusRound.lettersPicked);
    domUpdates.showPlayersBonusRoundGuess(
      bonusRound.puzzle,
      bonusRound.lettersPicked
    );
    domUpdates.disableVowels();
  }
});

$(".solve-puzzle-btn").click(event => {
  event.preventDefault();
  domUpdates.enableSpinBtn();
  domUpdates.clearSpinValue();
  let playerGuess = $(".solve-puzzle-input").val();
  let result = game.round.solvePuzzle(playerGuess);
  $(".solve-puzzle-input").val("");
  if (result && game.roundCounter < 4) {
    let roundWinner = game.round.currentPlayer;
    game.makeNewRound(roundWinner);
    domUpdates.appendPuzzle(game.round.puzzle);
  } else if (result && game.roundCounter === 4) {
    game.players.forEach(player => (player.score = 0));
    domUpdates.updatePlayerScores(game.players);
    game.displayChampion();
  } else if (game.roundCounter === 5) {
    bonusRound.solvePuzzle(playerGuess);
  } else {
    game.round.findCurrentPlayer();
    domUpdates.updateCurrentPlayerName(game.round.currentPlayer.name);
  }
});

$(".turn-prompt").on("click", event => {
  if (event.target.className === "bonus-round-button") {
    event.preventDefault();
    bonusRound = new BonusRound(
      game.puzzles,
      game.wheel,
      game.players,
      game.returnChampion()
    );
    domUpdates.disableConsonants();
    domUpdates.appendBonusPuzzle(bonusRound.puzzle);
    domUpdates.displayBonusRound();
    domUpdates.appendBonusPrompts();
    domUpdates.enableSpinBtn();
  }
});

$(".quit-game").click(event => {
  location.reload();
})

$('.instructions').click(() => {
  $('.inst').delay(1300).fadeIn('slow');
  $('.inst-text').delay(1700).fadeIn('slow');
  $('.crystal-spin').fadeOut(1250);
})

$('.btn').click(() => {
  $('.inst').fadeOut('slow');
  $('.crystal-spin').fadeIn('slow');
})

$('.inst').hide()
$('.instructions').hide()
$('.quit-game').hide()
$('.game-header').hide()


