import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Round {
  constructor(players, wheel, puzzle) {
    this.players = players;
    this.wheel = wheel;
    this.puzzle = puzzle;
    this.oneWord = Object.values(data.puzzles.one_word_answers.puzzle_bank);
  }

  getRandomPuzzle(puzzles) {
    let randomNumber = Math.floor(Math.random() * puzzles.length);

  }
}

export default Round;
