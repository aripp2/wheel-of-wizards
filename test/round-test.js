import chai from 'chai';
import Round from '../src/Round';
import spies from 'chai-spies';
import data from '../src/data/sample-data'
chai.use(spies);

const expect = chai.expect;

describe('Round', function() {
  let round;
  
  beforeEach(function () {
    round = new Round(data);
  });

  it("should be a function", () => {
    expect(Round).to.be.a("function");
  });

  it('should be an instance of round', function() {
    expect(round).to.be.an.instanceOf(Round);
  });

  
});