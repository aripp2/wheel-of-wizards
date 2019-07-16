
import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
// import data from './data/sample-data';
fetch("https://fe-apps.herokuapp.com/api/v1/gametime/1903/wheel-of-fortune/data")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

class Game {
  constructor(p1, p2, p3) {
    this.roundCounter = 0;
    this.player1 = new Player(1, p1);
    this.player2 = new Player(2, p2);
    this.player3 = new Player(3, p3);
    this.players = [];
    this.round = this.makeNewRound();
    this.wheel = new Wheel(); 
    this.champion;
    console.log(this.player1)
  }

  createPlayers() {
    this.players.push(this.player1, this.player2, this.player3);
    return this.players;
  }

  makeNewRound() {
    if (this.roundCounter < 4) {
    this.roundCounter++;
    return new Round(this);
    } else {
      this.returnChampion();
      // bonus round
    }
  }

  returnChampion() {
    //return winner of game
    let order = this.players.sort((a,b) =>
      b.bank - a.bank);
    this.champion = order[0];
  }

  quitGame() {
    // dom
  }
}
  
export default Game;