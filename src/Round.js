import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Round {
  constructor(game, currentRound) {
    this.game = game;
    this.currentRound = currentRound;
    this.puzzle = this.assignPuzzle();
    this.currentSpin;
    // this.oneWord = Object.values(data.puzzles.one_word_answers.puzzle_bank);
  }

  createNewTurn() {
    let turn = new Turn(this, player);
  }

  endRound() {
    //game.round++
    //game.makeNewRound()
  }

  assignPuzzle() {
    //return a single puzzle object
    // this.puzzle = new Puzzle(puzzleObj);
    let randomNumber = Math.floor(Math.random() * puzzles.length);
  }

  makePuzzleBank() {
  // return all puzzles array
  }

  displayPuzzle() {

  }
}

export default Round;
