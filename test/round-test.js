import chai from 'chai';
import Round from '../src/Round.js';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;

describe('Round', function() {
    let round;

    beforeEach(function () {
      round = new Round();
    });

    it("should be a function", () => {
    expect(Round).to.be.a("function");
    });

    it('should be an instance of round', function() {
      expect(round).to.be.an.instanceOf(Round);
    });
});