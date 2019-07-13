
import chai from 'chai';
import Game from '../src/Game.js';
// import domUpdates from '../src/domUpdates.js';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;

describe('Game', function() {
    let game;

    beforeEach(function () {
      game = new Game();
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
        expect(game.players.length).to.equal(3);
    });

    it('should have three players when the game begins', function() {
        expect(game.players.length).to.equal(3);
    });

    it('should begin at round one', function () {
        expect(game.round).to.equal(1)
    });
    
    it('should start each player at zero in the beginning of each round', function () {
        expect(game.player.account).to.equal(0)
    });

    it('should allow the winner of a round to bank their money', function(){
        game.checkForCorrectAnswer('correct answer is true')
        expect(game.player['player that gave answer'].account).to.equal($2500)
        //or somethingish like that
        //expect losers to still be at $0
    });

    it('should have a large array of puzzles', function(){
        expect(game.puzzles.length).to.equal(someBigNumber)
    });

    it('should randomize the puzzles', function() {
        expect(game.randomizePuzzles()).to.equal(someRandomArray)
        //maybe a ".to.not.equal(originalArray)"
    });

    it('should declare a winner after four rounds', function () {
        expect(game.declareWinner()).to.equal(1)
        //i was thinking popping those that did not win out of the array 
        //and checking the length of the 'winner array' to test this
    });

    it('should include a bonus round at the end of the fourth round', function(){
        expect().to.equal()
        //unsure how to test this, and this may be better in round-test
    });

});