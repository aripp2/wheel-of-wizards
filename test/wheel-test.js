import chai from 'chai';
import Wheel from '../src/Wheel';
// import spies from 'chai-spies';
import data from '../src/data/sample-data';

const expect = chai.expect;

chai.use(spies);


describe('Wheel', () => {
  let wheel
  beforeEach(() => {
    wheel = new Wheel();
  });

  it('should be a function', () => {
    expect(Wheel).to.be.a('function');
  });

  it('should be an instance of wheel', () => {
    expect(wheel).to.be.an.instanceOf(Wheel);
  });

  it('should have more than six elements', () => {
    expect(wheel.wheel.length).to.be.gt(6);
  });

  it('should be a randomized wheel at the beginning of each round', () => {
    let output = wheel.returnSpinValue();
    console.log(output)
    // expect(spin).to.have.been.called(1);
  });
});
