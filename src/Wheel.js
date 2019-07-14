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
    let value = Math.round(Math.random() * 21);

    return this.wheel[value];
  }

  randomizeWheel() {
    //make a random wheel
    //shuffle the wheel indexes
  }
}

export default Wheel;
