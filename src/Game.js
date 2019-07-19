
import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import data from './data/sample-data';


class Game {
  constructor() {
    this.roundCounter = 0;
    this.players = [];
    this.round;
    this.champion;
  }

  createPlayers(p1, p2, p3) {
    let player1 = new Player(1, p1);
    let player2 = new Player(2, p2);
    let player3 = new Player(3, p3);
    this.players.push(player1, player2, player3);
    return this.players;
  }


  makeNewRound() {
    if (this.roundCounter < 4) {
      this.roundCounter++;
      this.round = new Round(this.players);
    } else {
      this.returnChampion();
    }
  }

  returnChampion() {
    let order = this.players.sort((a, b) =>
      b.bank - a.bank);
    this.champion = order[0];
  }

  quitGame() {
    // dom
  }
}
  
export default Game;