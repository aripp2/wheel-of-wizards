import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import Turn from './Turn';
import data from './data/sample-data';

class Round {
  constructor(game) {
    this.game = game;
    this.puzzleBank = [];
    this.puzzle = this.assignPuzzle();
    this.turn = this.makeNewTurn();
    this.currentSpin;
    }


  makeNewTurn() {
    return new Turn(this, 'CHANGETHISNAME');
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

  displayPuzzle() {
    //dom
  }
}


export default Round;
