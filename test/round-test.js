import chai from 'chai';
import Round from '../src/Round';
import spies from 'chai-spies';
import data from '../src/data/sample-data'
import Game from '../src/Game';
import domUpdates from '../src/domUpdates.js';

const expect = chai.expect;

chai.spy.on(Round, [
  'assignPuzzle'
], () => {}
);

chai.use(spies);

describe('Round', function() {
  let game;
  let round;
  
  beforeEach(function () {
    game = new Game(data, 'Amy', 'Amanda', 'Greg')
    game.createPlayers();
    game.makeNewRound();
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it('should be an instance of round', function() {
    expect(game.round).to.be.an.instanceOf(Round);
  });

  it('should make a new round if a round has ended', function() {
    // round.endRound();
    // chai.spy.on(game, ['makeNewRound']); //spying on whatever is called within that function
    // game.makeNewRound()
    // expect(game.makeNewRound).to.be.called(1);
  });

  it('should make a puzzle bank of all puzzles', function() {
    // game.round.makePuzzleBank();
    expect(game.round.puzzleBank.length).to.equal(96)
  });

  it('make a new Puzzle', function() {
    // chai.spy.on(Round, ['assignPuzzle']);
    console.log(game.round)
    expect(game.round.assignPuzzle()).to.have.been.called(1)
  });
});