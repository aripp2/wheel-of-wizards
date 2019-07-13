import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';

class Game {
  constructor() {
    this.data = data;
    this.players = [];
    this.round = new Round();
   
  }

  startGame() {
    let player1 = new Player(1, 'Amy');
    let player2 = new Player(2, 'Amanda');
    let player3 = new Player(3, 'Greg');
    this.players.push(player1, player2, player3);
    return this.players;
  }



}
  
export default Game;