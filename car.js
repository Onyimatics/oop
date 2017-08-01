const vehicle = require('./vehicle');

module.exports = class Car extends Vehicle {
  constructor(manufacturer, wheels, color, model, doors) {
    super(manufacturer, wheels, color);
    this._model = model;
    this.doors = doors;
  }

  get model () {
    return this._model;
  }

  drive () {
    return 'zoom';
  }
}
