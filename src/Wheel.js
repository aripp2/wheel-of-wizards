import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';

class Wheel {
  constructor() {
    this.wheel = data.wheel; 
  }

  returnSpinValue() {
    let value = Math.round(Math.random() * this.wheel.length);
    return this.wheel[value];
  }
}

export default Wheel;
