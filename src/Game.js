import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';

class Game {
  constructor(p1, p2, p3) {
    this.players = [];
    this.roundCounter = 0;
    this.player1 = new Player(1, p1);
    this.player2 = new Player(2, p2);
    this.player3 = new Player(3, p3);
    // this.round = new Round(this, this.roundCounter);
    this.round = this.makeNewRound();
    this.wheel = new Wheel(); 
    this.champion;
  }

  createPlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  }

  // setRound() {
  //   return this.roundCounter++;
  // }

  returnChampion() {
    //return winner of game
  }

  makeNewRound() {
    //this.roundCounter++;
    //this.round = new Round(this, this.roundCounter);
  }

}
  
export default Game;