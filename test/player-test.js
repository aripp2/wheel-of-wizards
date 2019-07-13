import chai from 'chai';
import Player from '../src/Player.js';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;

describe('Player', function() {
    let player;

    beforeEach(function () {
      player = new Player();
    });

    it("should be a function", () => {
    expect(Player).to.be.a("function");
    });

    it('should be an instance of player', function() {
      expect(player).to.be.an.instanceOf(Player);
    });
});