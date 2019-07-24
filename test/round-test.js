import chai from "chai";
import Game from "../src/Game";
import Round from "../src/Round";
const expect = chai.expect;

import spies from "chai-spies";
import data from "../src/data/sample-data";
import domUpdates from "../src/domUpdates.js";

chai.use(spies);

describe("Round", function() {
  let game;
  let round;

  beforeEach(function() {
    game = new Game(data, "Amy", "Amanda", "Greg");
    game.createPlayers("Amy", "Amanda", "Greg");
    game.makeNewRound(game.players[0]);
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it("should be an instance of round", function() {
    expect(game.round).to.be.an.instanceOf(Round);
  });

  it("should allow the winner of a round to bank their money", () => {
    game.makeNewRound();
    expect(domUpdates.updatePlayerScores).to.have.been.called(8);
  });

  it("should make a puzzle bank of all puzzles", function() {
    expect(game.round.puzzleBank.length).to.equal(96);
  });

  it("should have some options for a spin result", () => {
    game.round.spinOptions();
    expect(domUpdates.enableConsonants).to.have.been.called(1);
  });

  it("should have some options for a guess", () => {
    game.round.guessEvents();
    expect(domUpdates.disableUsedConsonants).to.have.been.called(2);
  });

  it("should have events for when you buy a vowel", () => {
    game.round.buyVowel();
    expect(domUpdates.disableVowels).to.have.been.called(1);
  });
});
