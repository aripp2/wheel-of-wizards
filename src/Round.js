import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Round {
  constructor(id) {
    this.id = id;
    this.wheel = new Wheel();
    this.puzzle = new Puzzle();
    this.currentSpin = currentSpin;
    // this.oneWord = Object.values(data.puzzles.one_word_answers.puzzle_bank);
  }

  spinWheel() {
    let value = Math.round(Math.random() * 21);
    this.currentSpin = data.wheel[value];
  }


  getRandomPuzzle(puzzles) {
    let randomNumber = Math.floor(Math.random() * puzzles.length);

  }
}

export default Round;
