import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';

class Game {
  constructor(p1, p2, p3) {
    // this.data = data;
    this.players = [];
    this.roundCounter = 0;
    this.player1 = new Player(1, p1);
    this.player2 = new Player(2, p2);
    this.player3 = new Player(3, p3);
    this.round = new Round(this.roundCounter);
    
   
  }

  createPlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  }

  setRound() {
    return this.roundCounter++;
  }






}
  
export default Game;