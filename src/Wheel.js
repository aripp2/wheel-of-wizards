import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';

class Wheel {
  constructor(){
    this.wheel = data.wheel; 
  }

  // spinVal() {
  //   let value = Math.round(Math.random() * 21);

  //   console.log(value)

  //   this.currentSpin = this.wheel[value];
  //   console.log(this.currentSpin);
  // }

  // randomizeWheel() {
  //   let randomNumber = Math.floor(Math.random() * this.wheel.length);

  //   let randomWheel = this.wheel[randomNumber];
  //   return randomWheel;
  // }
}

export default Wheel;
