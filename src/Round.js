import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';
import domUpdates from './domUpdates';

class Round {
  constructor(puzzles, wheel, players) {
    this.puzzles = puzzles;
    this.wheel = wheel;
    this.players = players;
    this.puzzleBank = [];
    this.puzzle = this.assignPuzzle();
    this.currentPlayer = this.findCurrentPlayer();
    this.currentSpin = null;
    this.lettersUsed = [];
    // this.roundWinner = null;
    console.log(this.puzzle.correctAnswer.join(''))
  }

  assignPuzzle() {
    this.makePuzzleBank();
    let randomNumber = Math.floor(Math.random() * this.puzzleBank.length);
    return new Puzzle(this.puzzleBank[randomNumber])
  }

  makePuzzleBank() {
    let oneWordPuzzles = this.puzzles.one_word_answers.puzzle_bank;
    let twoWordPuzzles = this.puzzles.two_word_answers.puzzle_bank;
    let threeWordPuzzles = this.puzzles.three_word_answers.puzzle_bank;
    let fourWordPuzzles = this.puzzles.four_word_answers.puzzle_bank;
    let allPuzzles = oneWordPuzzles.concat(...twoWordPuzzles, ...threeWordPuzzles, ...fourWordPuzzles);
    return allPuzzles.forEach(puzzle => this.puzzleBank.push(puzzle))
  }
  
  findCurrentPlayer() { 
    if (this.currentPlayer === this.players[0]) {
      return this.currentPlayer = this.players[1];
    } else if (this.currentPlayer === this.players[1]) {
      return this.currentPlayer = this.players[2];
    } else {
      return this.currentPlayer = this.players[0]
    }
    console.log(this.currentPlayer);
  }

  spinWheel() {
    let wheelIndex = Math.round(Math.random() * this.wheel.length);
    this.currentSpin = this.wheel[wheelIndex];
    return this.currentSpin;
  }

  spinOptions() {
    if (this.currentSpin === 'BANKRUPT') {
      this.currentPlayer.score = 0;
      domUpdates.disableConsonants();
      domUpdates.updateCurrentPlayerScore(this.currentPlayer);
      this.findCurrentPlayer();
      domUpdates.updateCurrentPlayerName(this.currentPlayer.name) 
      console.log(this.currentPlayer);
    } else if (this.currentSpin === 'LOSE-A-TURN') {
      domUpdates.disableConsonants();
      this.findCurrentPlayer();
      domUpdates.updateCurrentPlayerName(this.currentPlayer.name) 
      console.log(this.currentPlayer)
    } else {
      domUpdates.enableConsonants();
      domUpdates.disableUsedConsonants(this.lettersUsed);
    }
  }

  guessEvents(guess) {
    let numUsed = 0;
    this.lettersUsed.push(guess);
    console.log(this.lettersUsed)
    this.puzzle.correctAnswer.forEach(letter => {
      if (guess === letter) {
        numUsed++;
        this.currentPlayer.score += this.currentSpin;
        console.log('counter', numUsed);
        console.log('score', this.currentPlayer.score)
        domUpdates.appendLetter(guess);
        console.log(this.currentPlayer)
        domUpdates.updateCurrentPlayerScore(this.currentPlayer);
        domUpdates.enableBuyVowel();
      } 
    })
    domUpdates.disableUsedConsonants(this.lettersUsed);
    console.log(this.puzzle.correctAnswer)
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
      } 
    })
    domUpdates.disableUsedConsonants(this.lettersUsed);
    domUpdates.disableUsedVowels(this.lettersUsed);
    domUpdates.disableVowels();
    console.log(this.puzzle.correctAnswer)


    }
  }

  solvePuzzle(playerGuess) {
    if (this.puzzle.correctAnswer.join('') === playerGuess.toUpperCase()) {
      this.currentPlayer.bank += this.currentPlayer.score;
      domUpdates.updateCurrentPlayerBank(this.currentPlayer);
      // this.findRoundWinner();
      console.log('winner', this.roundWinner)
      return true;
    } else {
      this.findCurrentPlayer();
      return false;
    }
  }

  // findRoundWinner() {
  //   this.roundWinner = this.players.find(player => player === this.currentPlayer)
  // }
}

export default Round;
