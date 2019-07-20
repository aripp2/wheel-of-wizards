import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import Turn from './Turn';
// import data from './data/sample-data';
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
    console.log(this.puzzle.correctAnswer)
  }

  assignPuzzle() {
    this.makePuzzleBank();
    let randomNumber = Math.floor(Math.random() * this.puzzleBank.length);
    return new Puzzle(this.puzzleBank[randomNumber])
  }

  makePuzzleBank() {
    console.log(this.puzzles)
    let oneWordPuzzles = this.puzzles.one_word_answers.puzzle_bank;
    let twoWordPuzzles = this.puzzles.two_word_answers.puzzle_bank;
    let threeWordPuzzles = this.puzzles.three_word_answers.puzzle_bank;
    let fourWordPuzzles = this.puzzles.four_word_answers.puzzle_bank;
    let allPuzzles = oneWordPuzzles.concat(...twoWordPuzzles, ...threeWordPuzzles, ...fourWordPuzzles);
    return allPuzzles.forEach(puzzle => this.puzzleBank.push(puzzle))
  }
  
  findCurrentPlayer() {
    if(this.currentPlayer === this.players[0]){
      return this.currentPlayer = this.players[1];
    } else if (this.currentPlayer === this.players[1]){
      return this.currentPlayer = this.players[2];
    } else {
      return this.currentPlayer = this.players[0]
    }
  }

  spinWheel() {
    let wheelIndex = Math.round(Math.random() * this.wheel.length);
    this.currentSpin = this.wheel[wheelIndex];
    return this.currentSpin;
  }

  spinOptions() {
      if(this.currentSpin === 'BANKRUPT'){
        this.currentPlayer.score = 0;
        this.findCurrentPlayer();
      } if(this.currentSpin === 'LOSE-A-TURN'){
        this.findCurrentPlayer();
        domUpdates.updateCurrentPlayerName(currentPlayer.name);
      } else {
        this.guessEvents()
      }
    }

  guessEvents() {
      console.log('guess events are not done')
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

  solvePuzzle(playerGuess){
    if (this.puzzle.correctAnswer.join('') === playerGuess.toUpperCase()){
      this.currentPlayer.score = this.currentPlayer.bank;
      return true;
    } else {
      this.findCurrentPlayer();
      return false;
    }
  }
}

export default Round;
