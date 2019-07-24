import $ from "jquery";

export default {
  appendPlayers(players) {
    players.forEach(player => {
      $(`.player-${player.id}-name`).text(player.name);
      $(`.player-${player.id}-score`).text(player.score);
      $(`.player-${player.id}-bank`).text(player.bank);
    });
  },

  updateCurrentPlayerName(player) {
    $(".turn-prompt").text(player + " it is your turn!");
  },

  clearSpinValue() {
    $(".spin-value").text("");
  },

  displayCurrentRound(roundNum) {
    $(".display-round").text("Round " + roundNum);
  },

  displayBonusRound() {
    $(".display-round").text("BONUS ROUND!!!");
  },

  updatePlayerScores(players) {
    players.forEach(player => {
      $(`.player-${player.id}-score`).text(player.score);
      $(`.player-${player.id}-bank`).text(player.bank);
    });
  },

  appendPuzzle(puzzle) {
    let puzzleAnswer = this.createPuzzle(puzzle.correctAnswer);
    $(".puzzle-input-area").html(`${puzzleAnswer}`);
    $(".puzzle-character").hide();
    $(".symbol").show();
    $(".category").text(puzzle.category);
    $(".hint").text(puzzle.hint);
    console.log(puzzle.correctAnswer.join(""));
  },

  displayChampionBanner(champion) {
    let displayChamp = `<p>${champion.name} is the Winner!</p>
    <button class="bonus-round-button">Click to start the Bonus Round!</button>`;
    $(".turn-prompt").html(`${displayChamp}`);
  },

  bonusRoundChampion(champion) {
    console.log("champ", champion);
    let displayChamp = `<p>Congrats ${champion.name} you won $${
      champion.bank
    }</p>
    <p>Click Quit Game in the top left corner to play again!</p>`;
    $(".turn-prompt").html(`${displayChamp}`);
  },

  appendBonusPuzzle(puzzle) {
    let puzzleAnswer = this.createPuzzle(puzzle.correctAnswer);
    $(".puzzle-input-area").html(`${puzzleAnswer}`);
    $(".puzzle-character").hide();
    $(".symbol").show();
    $(".category").text(puzzle.category);
    $(".hint").text(puzzle.hint);
    let letters = ["R", "S", "T", "L", "N", "E"];
    puzzle.correctAnswer.forEach(letter => {
      if (letters.includes(letter)) {
        $(`.${letter}`).show();
      }
    });
  },

  showPlayersBonusRoundGuess(puzzle, letterArray) {
    let puzzleAnswer = this.createPuzzle(puzzle.correctAnswer);
    $(".puzzle-input-area").html(`${puzzleAnswer}`);
    $(".puzzle-character").hide();
    $(".symbol").show();
    $(".category").text(puzzle.category);
    $(".hint").text(puzzle.hint);
    let letters = ["R", "S", "T", "L", "N", "E"].concat(letterArray);
    puzzle.correctAnswer.forEach(letter => {
      if (letters.includes(letter)) {
        $(`.${letter}`).show();
      }
    });
  },

  // showBonusRoundSolution(puzzleAnswer) {
  //   puzzleAnswer.forEach(letter => {
  //     $(`.${letter}`).show();
  //   })
  // },

  createPuzzle(answer) {
    let list = `<div class="current-puzzle">`;
    let currentPuzzle = answer.forEach(letter => {
      if (letter === "&" || letter === "-" || letter === "'") {
        list += `<p class="puzzle-container"><span class="puzzle-character symbol">${letter}</span></p>`;
      } else if (letter === " ") {
        list += `<p class="puzzle-container space"><span class="puzzle-character">${letter}</span></p>`;
      } else {
        list += `<p class="puzzle-container"><span class="puzzle-character ${letter}" id="${letter}">${letter}</span></p>`;
      }
    });
    list += "</div>";
    return list;
  },

  updateCurrentPlayerScore(player) {
    $(`.player-${player.id}-score`).text(player.score);
  },

  updateCurrentPlayerBank(player) {
    $(`.player-${player.id}-score`).text(player.bank);
  },

  appendLetter(guess) {
    $(`.${guess}`).show();
  },

  disableSpinBtn() {
    $(".spin-btn").attr("disabled", true);
  },

  enableSpinBtn() {
    $(".spin-btn").attr("disabled", false);
  },

  disableConsonants() {
    $(".letter").attr("disabled", true);
  },

  disableUsedConsonants(lettersUsed) {
    lettersUsed.forEach(letter => {
      $(`#cons${letter}`).attr("disabled", true);
    });
  },

  disableUsedVowels(lettersUsed) {
    lettersUsed.forEach(letter => {
      $(`#vowel${letter}`).attr("disabled", true);
    });
  },

  enableConsonants() {
    $(".letter").attr("disabled", false);
  },

  disableVowels() {
    $(".vowel").attr("disabled", true);
  },

  enableVowels() {
    $(".vowel").attr("disabled", false);
  },

  enableBuyVowel() {
    $(".buy-vowel-btn").attr("disabled", false);
  },

  appendBonusPrompts() {
    $(".turn-prompt").text(
      "Click Spin to see the magical amount you can try to win! Choose 3 consonants and 1 vowel, then enter your final guess!"
    );
    $(".buy-vowel-btn").hide();
  },

  disableBonus() {
    let letters = ["R", "S", "T", "L", "N"];
    letters.forEach(letter => {
      $(`#cons${letter}`).attr("disabled", true);
    });
    $("#vowelE").attr("disabled", true);
  },

  lostBonusRound(name, bank) {
    $(".turn-prompt")
      .html(`<p>Sorry ${name} that is not the correct answer. You still win $${bank}!</p>
      <p>Click on Quit Game in the top left corner to start a new game.</p>`);
  },

  disableBuyVowel() {
    $(".buy-vowel-btn").attr("disabled", true);
  },

  notEnoughMoney() {
    alert("Sorry Muggle! You are too poor!");
  }
};
