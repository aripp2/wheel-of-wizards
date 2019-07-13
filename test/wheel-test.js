import chai from 'chai';
import Wheel from '../src/Wheel.js';
import spies from 'chai-spies';
chai.use(spies);

const expect = chai.expect;

describe('Wheel', function() {
    let wheel;

    beforeEach(function () {
      wheel = new Wheel();
    });

    it("should be a function", () => {
    expect(Wheel).to.be.a("function");
    });

    it('should be an instance of wheel', function() {
      expect(wheel).to.be.an.instanceOf(Wheel);
    });
});