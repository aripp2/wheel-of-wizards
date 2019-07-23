import Game from "./Game.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import Round from "./Round.js";
// import data from './data/sample-data';

class Player {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.score = 0;
    this.bank = 0;
  }
}

export default Player;
