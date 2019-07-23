import Game from "../src/Game.js";
import data from "../src/data/sample-data";
import Round from "../src/Round.js";
import chai from "chai";
import spies from "chai-spies";
import domUpdates from "../src/domUpdates.js";
// import Round from './Round.js';

const expect = chai.expect;
chai.use(spies);

chai.spy.on(
  domUpdates,
  [
    "appendPlayers",
    "updateCurrentPlayerName",
    "updatePlayerScores",
    "appendPuzzle",
    "createPuzzle",
    "displayChampion",
    "clearSpinValue",
    "displayCurrentRound",
    "bonusRoundChampion",
    "appendBonusPuzzle",
    "showPlayersBonusRoundGuess",
    "updateCurrentPlayerScore",
    "updateCurrentPlayerBank",
    "appendLetter",
    "disableSpinBtn",
    "enableSpinBtn",
    "disableConsonants",
    "disableUsedConsonants",
    "disableUsedVowels",
    "enableConsonants",
    "disableVowels",
    "enableVowels",
    "enableBuyVowel",
    "disableBuyVowel",
    "notEnoughMoney",
    "disableBonus"
  ],
  () => {}
);

describe("Game", () => {
  let game;

  beforeEach(() => {
    game = new Game(data, "Greg", "Amanda", "Amy");
  });

  it("should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it("should be an instance of game", () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it("should not have any players before a game begins", () => {
    expect(game.players.length).to.be.equal(0);
  });

  it("should have three players when the game begins", () => {
    game.createPlayers();
    expect(game.players.length).to.equal(3);
  });

  it("should begin at round one", () => {
    game.createPlayers("Amy", "Greg", "Amanda");
    game.makeNewRound(game.players[0]);
    expect(domUpdates.displayCurrentRound).to.have.been.called(1);
  });

  it("should start each player at zero in the beginning of each round", () => {
    game.createPlayers();
    expect(game.players[0].score).to.equal(0);
  });

  it("should declare a winner after four rounds", () => {
    game.makeNewRound();
    game.makeNewRound();
    game.makeNewRound();
    game.displayChampion();
    expect(domUpdates.displayChampion).to.have.been.called(1);
  });
});
