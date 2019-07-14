import Wheel from './Wheel';
import Game from './Game';
import Player from './Player';
import Puzzle from './Puzzle';
import Round from './Round';
import data from './data/sample-data';

class Turn {
  constructor(round, player) {
    this.round = round;
    this.player = player;
    this.currentSpin;
    this.score = 0;
    this.spunWheel = false;
  }

  spinWheel() {
      //call wheel spinWheel 
      //Assign to current spin
    let value = Math.round(Math.random() * 21);
    this.currentSpin = data.wheel[value];
  }

  buyVowel() {
    
  }

  solvePuzzle() {

  }

  updateScore() {

  }

  goBankrupt() {

  }

  endTurn() {

  }

  compareGuessAgainstSolution() {

  }

  getNextPlayer() {

  }
}

export default Turn;