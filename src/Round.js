import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Round {
  constructor(game) {
    this.game = game;
    this.puzzleBank = [];
    this.puzzle = this.assignPuzzle();
    this.currentSpin;
    }


  createNewTurn() {
    let turn = new Turn(this, player);
  }

  endRound() {
    // game.roundCounter++
    game.makeNewRound()
  }
  //endRound is probably going to happen
  //when someone solves a puzzle in TURN

  assignPuzzle() {
    // return a single puzzle object
    let randomNumber = Math.floor(Math.random() * this.puzzleBank.length);
    console.log(randomNumber)
    // this.puzzle = new Puzzle(puzzleObj);
    // let puzzle = new Puzzle(randomNumber)
  }

  makePuzzleBank() {
    let oneWordPuzzles = data.puzzles.one_word_answers.puzzle_bank;
    let twoWordPuzzles = data.puzzles.two_word_answers.puzzle_bank;
    let threeWordPuzzles = data.puzzles.three_word_answers.puzzle_bank;
    let fourWordPuzzles = data.puzzles.four_word_answers.puzzle_bank;
    let allPuzzles = oneWordPuzzles.concat(...twoWordPuzzles, ...threeWordPuzzles, ...fourWordPuzzles);
    return allPuzzles.forEach(puzzle => this.puzzleBank.push(puzzle))
  // return all puzzles array
  }

  displayPuzzle() {

  }
}


export default Round;
