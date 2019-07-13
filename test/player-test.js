import chai from 'chai';
import Player from '../src/Player.js';
import spies from 'chai-spies';
import Wheel from '../src/Wheel.js';
import data from '../src/data/sample-data'

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

    it('should allow the player to quit at any time', function(){
      //unsure how to test
    });

    it('should give the player a name', function() {
      expect(player.name).to.be.equal('Barbara');
    });

    it('should have an id', function() {
      expect(player.id).to.be.equal(1);
    });

    it('should have a default score of zero', function () {
      expect(player.account).to.equal(0)
    });

    it('should be able to clear account if wheel returns bankrupt', function(){
      wheel.returnElement('BANKRUPT');
      expect(player.account).to.equal(0)
    });

    it('should end a turn if lose-a-turn', function () {
      wheel.returnElement('LOSE-A-TURN');
      expect(player.Active).to.be.equal(anotherPlayer);

      // game.activePlayer = player1
      // wheel.currentValue = 'LOSE A TURN'
      // wheel.loseATurn(game)
  
      // expect(game.activePlayer).to.equal(player2)
    });

    it('should allow player to buy a vowel for hundred dollars', function(){
      expect(player.account).to.be.equal(500)
      player.guess(vowel)
      expect(player.account).to.be.equal(400)
    });

    it('should allow me to guess a consonant if a money element is returned from the wheel', function(){
      wheel.returnElement($$);
      player.guess(consonant);
      
    });

});