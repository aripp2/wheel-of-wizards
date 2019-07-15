
import Wheel from '../src/Wheel';
import Game from '../src/Game';
import Player from '../src/Player';
import Puzzle from '../src/Puzzle';
import Round from '../src/Round';

import chai from 'chai';
import spies from 'chai-spies';

const expect = chai.expect;

// chai.use(spies);
// 
describe('Turn', () => {
  let turn;

  beforeEach(() =>{
    turn = new Turn();
  });

  it('should be a function', () => {
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of wheel', () => {
    expect(turn).to.be.an.instanceOf(Turn);
  });

  it('should allow player tom buy a vowel if vowel is available', () => {
    turn.buyVowel();
    expect(player.guess).to.equal('a');
  });

  it('should take 100 out of players score if vowel is chosen', () => {
    turn.buyVowel();
    expect(player.score).to.equal(player.score - 100);

    // it('should allow player to buy a vowel for hundred dollars', () => {
    //   expect(player.account).to.be.equal(500);
    //   player.guess(vowel);
    //   expect(player.account).to.be.equal(400);
    // });
  });

  it('should be able to clear players score if wheel returns bankrupt', () => {
    wheel.returnElement('BANKRUPT');
    turn.goBankrupt();
    expect(player.score).to.equal(0);
  });


  it('should end a turn if wheel returns lose-a-turn', () => {
    wheel.returnElement('LOSE-A-TURN');
    expect(player.Active).to.be.equal(anotherPlayer);

    // game.activePlayer = player1
    // wheel.currentValue = 'LOSE A TURN'
    // wheel.loseATurn(game)
  
    // expect(game.activePlayer).to.equal(player2)
  });

  it('should allow player to guess a consonant if a money element is returned from the wheel', () => {
    wheel.returnElement(typeof number);
    player.guess(consonant);
    expect(player.guess).to.equal(consonant);
  });
});