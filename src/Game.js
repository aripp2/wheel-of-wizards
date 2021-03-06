import Game from "./Game.js";
import Player from "./Player.js";
import Puzzle from "./Puzzle.js";
import Round from "./Round.js";
import BonusRound from "./BonusRound.js";
import domUpdates from "./domUpdates";
// import data from "./data/sample-data";

class Game {
  constructor(data) {
    this.puzzles = data.puzzles;
    this.wheel = data.wheel;
    this.roundCounter = 0;
    this.players = [];
    this.round;
    this.bonusRound = null;
  }

  createPlayers(p1, p2, p3) {
    let player1 = new Player(1, p1);
    let player2 = new Player(2, p2);
    let player3 = new Player(3, p3);
    this.players.push(player1, player2, player3);
    domUpdates.appendPlayers(this.players);
  }

  makeNewRound(currentPlayer) {
    domUpdates.disableConsonants();
    if (this.roundCounter < 4) {
      this.roundCounter++;
      this.players.forEach(player => (player.score = 0));
      domUpdates.updatePlayerScores(this.players);
      this.round = new Round(
        this.puzzles,
        this.wheel,
        this.players,
        currentPlayer
      );
      domUpdates.displayCurrentRound(this.roundCounter);
    }
  }

  displayChampion() {
    this.roundCounter++;
    let champion = this.returnChampion();
    domUpdates.displayChampionBanner(champion);
    domUpdates.disableSpinBtn();
  }

  returnChampion() {
    let order = this.players.sort((a, b) => b.bank - a.bank);
    this.champion = order[0];
    return this.players[0];
  }
}

export default Game;
