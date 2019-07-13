import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Round {
  constructor(data) {
    this.data = data;
    this.puzzle = new Puzzle();
  }
}

export default Round;
