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
    // this.turn = this.makeNewTurn();
    this.currentSpin;
    //this.currentPlayer;
    // console.log(this.puzzle)
    // console.log(this.);

  }


  // makeNewTurn() {
  //   return new Turn(this.players);
  // }

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

}


export default Round;
