import chai from 'chai';
const expect = chai.expect;
import spies from 'chai-spies';
import Game from '../src/Game.js';
import data from '../src/data/sample-data';
import domUpdates from '../src/domUpdates.js';
// import Round from './Round.js';

chai.use(spies);

chai.spy.on(domUpdates, [
  'appendPlayers',
  'updateCurrentPlayerName',
  'updatePlayerScores',
  'appendPuzzle',
  'createPuzzle',
], () => {})

describe('Game', () => {
  let game;

  beforeEach(() => {
    game = new Game(data,'Greg', 'Amanda', 'Amy');
  });

  it("should be a function", () => {
    expect(Game).to.be.a("function");
  });

  it('should be an instance of game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should not have any players before a game begins', () => {
    expect(game.players.length).to.be.equal(0);
  });

  it('should have three players when the game begins', () => {
    game.createPlayers();
    expect(game.players.length).to.equal(3);
  });

  it('should begin at round one', () => {
    game.createPlayers();
    game.makeNewRound();
    expect(game.roundCounter).to.equal(1);
  });
  
  it('should start each player at zero in the beginning of each round', () => {
    game.createPlayers();
    expect(game.players[0].score).to.equal(0)
  });

  it('should allow the winner of a round to bank their money', () => {
    game.checkForCorrectAnswer('correct answer is true')
    expect(game.player['player that gave answer'].account).to.equal(2500)
    //or somethingish like that
    //expect losers to still be at $0
  });

  it('should declare a winner after four rounds', () => {
    game.makeNewRound();
    game.makeNewRound();
    game.makeNewRound();
    game.makeNewRound();
    // game.returnChampion();
    // expect(game.champion).to.equal();
    // dom
  });

  it('should allow a player to quit at any time', () => {
    game.quitGame();
      // dom
    });

  it('should include a bonus round at the end of the fourth round', () => {
    expect().to.equal()
    //unsure how to test this, and this may be better in round-test
  });

});