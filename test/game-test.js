
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

});