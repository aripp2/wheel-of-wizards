import chai from 'chai';
import Wheel from '../src/Wheel.js';
import spies from 'chai-spies';
import data from '../src/data/sample-data'

chai.use(spies);


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

    it('should be a randomized wheel at the beginning of each round', function(){
      expect(wheel.array).to.be.equal(randomArray);
      // expect(spin).to.have.been.called(1);
    });

    it('should return a playable value', function(){
      expect(wheel.returnValue()).to.be.equal('money/bankrupt/loseATurn')
      // expect(return value).to.be.a(number || string)
    });


    it('should have more than six elements', function(){
      expect(wheel.elements.length).to.be.equal(num>6)
    });
});
