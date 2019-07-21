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
    console.log('here', this.players)
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
      domUpdates.disabledUsedConsonants(this.lettersUsed);
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
      } 
    })
    domUpdates.disabledUsedConsonants(this.lettersUsed);
    console.log(this.puzzle.correctAnswer)
  }

  buyVowel(chosenVowel) {
    const vowels = ['A', 'E', 'I', 'O', 'U'];
    if (vowels.includes(chosenVowel)) {
      let foundIndex = vowels.findIndex((letter) => letter === chosenVowel);
      vowels.splice(foundIndex, 1);
      Player.score -= 100;
      return vowels;
    } else {
      return 'Sorry Muggle! That vowel has disappeared!'
    }
  }

  solvePuzzle(playerGuess) {
    if (this.puzzle.correctAnswer.join('') === playerGuess.toUpperCase()) {
      this.currentPlayer.score = this.currentPlayer.bank;
      
      return true;
    } else {
      this.findCurrentPlayer();
      return false;
    }
  }
}

export default Round;
