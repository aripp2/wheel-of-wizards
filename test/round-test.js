import chai from 'chai';
import Round from '../src/Round';
import spies from 'chai-spies';
import data from '../src/data/sample-data'
import Game from '../src/Game';

const expect = chai.expect;

// chai.use(spies);

describe('Round', function() {
  let game;
  let round;
  
  beforeEach(function () {
    game = new Game('Amy', 'Amanda', 'Greg')
    round = new Round(game, 1);
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it('should be an instance of round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  it('should make a new round if a round has ended', function() {
    round.endRound();
    // chai.spy.on(game, ['makeNewRound']);
    expect(game.makeNewRound).to.be.called(1);
  });

  it('should make a puzzle bank of all puzzles', function(){
    round.makePuzzleBank();
    expect(round.puzzleBank.length).to.equal(96)
  });

  it('should make a puzzle bank of all puzzles', function(){
    round.makePuzzleBank();
    round.assignPuzzle();
    expect(round.puzzleBank.length).to.equal(96)
  });

  it('should make a new Turn', function (){
    
  })
});