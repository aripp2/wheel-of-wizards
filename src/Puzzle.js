import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';

class Puzzle {
  constructor(puzzleObj) {
    this.category = puzzleObj['category'];
    this.totalWords = puzzleObj['number_of_words'];
    this.totalLetters = puzzleObj['total_number_of_letters'];
    this.description = puzzleObj['description'];
    this.correctAnswer = [...puzzleObj.correct_answer.toUpperCase()];
    this.correctGuesses = [];
    this.incorrectGuesses = [];
  }

  checkGuess(playerGuess) {

  }

  checkSolutionGuess(playerGuess) {

  }

}

export default Puzzle;

