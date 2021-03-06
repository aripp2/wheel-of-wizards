import Game from "./Game";
import Player from "./Player";
import Puzzle from "./Puzzle";
import Round from "./Round";
import data from "./data/sample-data";
import domUpdates from "./domUpdates";

class Round {
  constructor(puzzles, wheel, players, currentPlayer) {
    this.puzzles = puzzles;
    this.wheel = wheel;
    this.players = players;
    this.puzzleBank = [];
    this.puzzle = this.assignPuzzle();
    this.currentPlayer = currentPlayer;
    this.currentSpin = null;
    this.lettersUsed = [];
  }

  assignPuzzle() {
    this.makePuzzleBank();
    let randomNumber = Math.floor(Math.random() * this.puzzleBank.length);
    return new Puzzle(this.puzzleBank[randomNumber]);
  }

  makePuzzleBank() {
    let oneWordPuzzles = this.puzzles.one_word_answers.puzzle_bank;
    let twoWordPuzzles = this.puzzles.two_word_answers.puzzle_bank;
    let threeWordPuzzles = this.puzzles.three_word_answers.puzzle_bank;
    let fourWordPuzzles = this.puzzles.four_word_answers.puzzle_bank;
    let allPuzzles = oneWordPuzzles.concat(
      ...twoWordPuzzles,
      ...threeWordPuzzles,
      ...fourWordPuzzles
    );
    return allPuzzles.forEach(puzzle => this.puzzleBank.push(puzzle));
  }

  findCurrentPlayer() {
    if (this.currentPlayer === this.players[0]) {
      return (this.currentPlayer = this.players[1]);
    } else if (this.currentPlayer === this.players[1]) {
      return (this.currentPlayer = this.players[2]);
    } else {
      return (this.currentPlayer = this.players[0]);
    }
  }

  spinWheel() {
    let wheelIndex = Math.round(Math.random() * this.wheel.length);
    this.currentSpin = this.wheel[wheelIndex];
    return this.currentSpin;
  }

  spinOptions() {
    if (this.currentSpin === "BANKRUPT") {
      this.currentPlayer.score = 0;
      domUpdates.disableConsonants();
      domUpdates.updateCurrentPlayerScore(this.currentPlayer);
      this.findCurrentPlayer();
      domUpdates.updateCurrentPlayerName(this.currentPlayer.name);
      domUpdates.enableSpinBtn();
    } else if (this.currentSpin === "LOSE A TURN") {
      domUpdates.disableConsonants();
      this.findCurrentPlayer();
      domUpdates.updateCurrentPlayerName(this.currentPlayer.name);
      domUpdates.enableSpinBtn();
    } else {
      domUpdates.enableConsonants();
      domUpdates.disableUsedConsonants(this.lettersUsed);
    }
  }

  guessEvents(guess) {
    let numUsed = 0;
    this.lettersUsed.push(guess);
    this.puzzle.correctAnswer.forEach(letter => {
      if (guess === letter) {
        numUsed++;
        this.currentPlayer.score += this.currentSpin;
        domUpdates.appendLetter(guess);
        domUpdates.updateCurrentPlayerScore(this.currentPlayer);
        domUpdates.enableBuyVowel();
      }
    });
    domUpdates.disableUsedConsonants(this.lettersUsed);
    if (!this.puzzle.correctAnswer.includes(guess)) {
      this.findCurrentPlayer();
      domUpdates.updateCurrentPlayerName(this.currentPlayer.name);
      domUpdates.disableConsonants();
    }
  }

  buyVowel(chosenVowel) {
    if (this.currentPlayer.score < 100) {
      domUpdates.notEnoughMoney();
      domUpdates.disableBuyVowel();
      domUpdates.disableVowels();
    } else {
      this.currentPlayer.score -= 100;
      domUpdates.updateCurrentPlayerScore(this.currentPlayer);
      this.lettersUsed.push(chosenVowel);
      this.puzzle.correctAnswer.forEach(letter => {
        if (chosenVowel === letter) {
          domUpdates.appendLetter(chosenVowel);
        } else {
          this.findCurrentPlayer();
          domUpdates.updateCurrentPlayerName(this.currentPlayer.name);
        }
      });
      domUpdates.disableUsedConsonants(this.lettersUsed);
      domUpdates.disableUsedVowels(this.lettersUsed);
      domUpdates.disableVowels();
    }
  }

  solvePuzzle(playerGuess) {
    if (this.puzzle.correctAnswer.join("") === playerGuess.toUpperCase()) {
      this.currentPlayer.bank += this.currentPlayer.score;
      domUpdates.updateCurrentPlayerBank(this.currentPlayer);
      this.lettersUsed = [];
      return true;
    } else {
      return false;
    }
  }
}

export default Round;
