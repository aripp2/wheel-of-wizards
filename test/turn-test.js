import Wheel from './Wheel.js';
import Game from './Game.js';
import Player from './Player.js';
import Puzzle from './Puzzle.js';
import Round from './Round.js';
import spies from 'chai-spies';

chai.use(spies);

describe('Turn', () => {
  let turn;

  beforeEach(() =>{
    turn = new Turn();
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
})