const expect = require('chai').expect;

const Car = require('../car');


describe('Car', () => {
  describe('it handles valid input', () => {
    it('inherits properties and methods from super class', function () {
      let car = new Car('toyota', 4, 'red', 'camry', 2);
      expect(car).to.deep.equal({
        _manufacturer: 'toyota',
        _wheels: 4,
        _color: 'red',
        _model: 'camry',
        _doors: 2,
      })
    })
  })
  describe('it handles invalid input', () => {
    it(
      'should throw a TypeError if instantiated with invalid arguements',
      function () {
        let result = function () {
          return new Car('toyota', 4, 2);
        }
        expect(result).to.throw(TypeError, 'Invalid input type')
      }
    )
  })
  describe('it overrides parent methods', () => {
    it('should return zoom instead of vehicle noise', function () {
      let car = new Car('toyota', 4, 'red', 'camry', 2);
      let drive = car.drive();
      expect(drive).to.equal('zoom');
    })
  })
})
