import chai from 'chai';
import Game from '../src/Game.js';
// import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
import data from '../src/data/sample-data'

chai.use(spies);

const expect = chai.expect;

describe('Game', function() {
  let game;

  beforeEach(function () {
    game = new Game('Greg', 'Amanda', 'Amy');
  });

  it("should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it('should be an instance of game', function() {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should not have any players before a game begins', function() {
    expect(game.players.length).to.be.equal(0);
  });

  it('should have three players when the game begins', function() {
    game.createPlayers();
    console.log(game.round);
    expect(game.players.length).to.equal(3);
  });

  it('should begin at round one', function () {
    // game.setRound();
    console.log(game.setRound());
    console.log(game.round.id);

    expect(game.round.id).to.equal(1);
  });
    
  it('should start each player at zero in the beginning of each round', function() {
    game.startGame();
    console.log(game.players[0])
    expect(game.players[0].score).to.equal(0)
  });

  it('should allow the winner of a round to bank their money', function() {
    game.checkForCorrectAnswer('correct answer is true')
    expect(game.player['player that gave answer'].account).to.equal(2500)
    //or somethingish like that
    //expect losers to still be at $0
  });

  it('should have a large array of puzzles', function() {
    expect(game.puzzles.length).to.equal(4)
  });

  it('should randomize the puzzles', function() {
    expect(game.randomizePuzzles()).to.equal(someRandomArray)
    //maybe a ".to.not.equal(originalArray)"
  });

  it('should declare a winner after four rounds', function () {
    expect(game.declareWinner()).to.equal(game.player[1])
  //i was thinking popping those that did not win out of the array 
    //and checking the length of the 'winner array' to test this
  });

  // it('should return a playable value', function(){
  //   let output = game.randomizeWheelOutput();
  //   console.log(output)
    
  // });

  it.only('should return a playable value', function(){
      expect(game.spinVal()).to.be.equal('money/bankrupt/loseATurn')
    });

  it('should include a bonus round at the end of the fourth round', function() {
    expect().to.equal()
    //unsure how to test this, and this may be better in round-test
  });

});