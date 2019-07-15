import chai from 'chai';
import Puzzle from '../src/Puzzle.js';
import spies from 'chai-spies';
import data from '../src/data/sample-data'

// chai.use(spies);

const expect = chai.expect;

describe('Puzzle', function() {
    let puzzle;

    beforeEach(function () {
      puzzle = new Puzzle();
    });

    it("should be a function", () => {
    expect(Puzzle).to.be.a("function");
    });

    it('should be an instance of puzzle', function() {
      expect(puzzle).to.be.an.instanceOf(Puzzle);
    });

    it('should keep track of letters guessed', function() {
      expect(lettersGuessed).to.equal()
    });
});





// beforeEach(function() {
//   puzzle = new Puzzle('meow', 2, 'friend of dorothy', 'something happy');
// });  

//   it('should instantiate a new puzzle', function() {

//     expect(puzzle.category).to.equal('meow');
//     expect(puzzle.numberOfLetters).to.equal(2);
//     expect(puzzle.correctAnswer).to.equal('friend of dorothy');
//     expect(puzzle.description).to.equal('something happy');
//     expect(puzzle.guessedLetters).to.equal(0);
//     expect(puzzle.consonantsBank).to.deep.equal([]);
//     expect(puzzle.vowelsBank.length).to.equal(0);
//   });
  
//   it('should buy a vowel', function () {
//     let player = new Player('adam', 1, 2500)
//     puzzle.buyAVowel(player);
//     expect(player.roundScore).to.equal(2400)
//   });

//   it('should populate a bank of consonants and vowels', function() {
//     expect(puzzle.populateConsonantsBank()).to.deep.equal([['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'],['A', 'E', 'I', 'O', 'U']])
//   });