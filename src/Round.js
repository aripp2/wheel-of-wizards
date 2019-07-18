import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import Turn from './Turn';
import data from './data/sample-data';

class Round {
  constructor(players) {
    this.wheel = data.wheel;
    this.players = players;
    this.puzzleBank = [];
    this.puzzle = this.assignPuzzle();
    this.turn = this.makeNewTurn();
    this.currentSpin = null;
    this.currentTurn = this.findCurrentPlayer();
  }


  makeNewTurn() {
    return new Turn(this.players, this.puzzle);
  }

  assignPuzzle() {
    this.makePuzzleBank();
    let randomNumber = Math.floor(Math.random() * this.puzzleBank.length);
    return new Puzzle(this.puzzleBank[randomNumber])
  }

  makePuzzleBank() {
    let oneWordPuzzles = data.puzzles.one_word_answers.puzzle_bank;
    let twoWordPuzzles = data.puzzles.two_word_answers.puzzle_bank;
    let threeWordPuzzles = data.puzzles.three_word_answers.puzzle_bank;
    let fourWordPuzzles = data.puzzles.four_word_answers.puzzle_bank;
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
    return this.wheel[this.currentSpin];
  }

  spinOptions() {
      if(this.currentSpin === 'BANKRUPT'){
        this.currentPlayer.score = 0;
        this.findCurrentPlayer();
          // console.log(Game.Round)
          // round.makeNewTurn()
      } if(this.currentSpin === 'LOSE-A-TURN'){
        this.findCurrentPlayer();
      } else {
    //     //dom.guessExecution()
        // this.guessExecution()
        this.guessEvents()
      }
    }

    guessEvents() {
      console.log('guess events are not done')
    }

  // goBankrupt() {
  //     this.currentPlayer.score = 0;
  //     this.findCurrentPlayer();
  //     console.log(this.currentPlayer);
  // }

  buyVowel(chosenVowel) {
    // from an array of vowels, splice vowel that is chosen
    // take 100 out of the players bank account when vowel 
    // is chosen
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

  solvePuzzle(){
    if ()
  }
}



export default Round;
