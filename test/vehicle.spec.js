const expect = require('chai').expect;

const Vehicle = require('../vehicle');


describe('Vehicle', () => {
  describe('it handles valid input', () => {
    it('should create object if instantiated with valid input', function () {
      let vehicle = new Vehicle('toyota', 4, 'red');
      expect(vehicle).to.deep.equal({
        _manufacturer: 'toyota',
        _wheels: 4,
        _color: 'red',
      })
    })
    it(
      'should throw a TypeError if instantiated with invalid arguements',
      function () {
        let result = function () {
          return new Vehicle('toyota', 4, 2);
        }
        expect(result).to.throw(TypeError, 'Invalid input type')
      }
    )
  })
  describe('Vehicle methods', ()=> {
    describe('manufacturer', () => {
      it('should return "toyota" as manufacturer',
        function () {
          let vehicle = new Vehicle('toyota', 4, 'red');
          let manufacturer = vehicle.manufacturer;
          expect(manufacturer).to.equal('toyota');
        }
      )
    })
    describe('wheels', () => {
      it('should return 4 as number of wheels', function () {
        let vehicle = new Vehicle('toyota', 4, 'red');
        let wheels = vehicle.wheels;
        expect(wheels).to.equal(4);
      })
    })
    describe('drive', () => {
      it('should return vehicle noise', function () {
        let vehicle = new Vehicle('toyota', 4, 'red');
        let drive = vehicle.drive();
        expect(drive).to.equal('vehicle noise');
      })
    })
    describe('color', () => {
      it('should return color (red) when called with no arguement',
        function () {
          let vehicle = new Vehicle('toyota', 4, 'red');
          let color = vehicle.color;
          expect(color).to.equal('red');
        }
      )
    })
    describe('color', () => {
      it('should set color to varirable', function () {
        let vehicle = new Vehicle('toyota', 4, 'red');
        let color = vehicle.color = 'blue';
        expect(color).to.equal('blue');
      })
    })
  })
})
