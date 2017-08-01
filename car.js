const Vehicle = require('./vehicle');

/**
* @class {Car}
* @param {manufacturer} [string]
* @param {wheels} [number]
* @param {color} [string]
* @param {model} [string]
* @param {doors} [number]
*
* @method {doors}
* @return {number} number of doors
*
* @method {model} [getter]
* @return {string} car model
*
* @method {drive}
* @return {string}
*/

module.exports = class Car extends Vehicle {
  constructor(manufacturer, wheels, color, model, doors) {
    if (typeof doors !== 'number' || typeof model !== 'string') {
      throw new TypeError ('Invalid input type');
    }
    super(manufacturer, wheels, color);
    this._model = model;
    this._doors = doors;
  }

  get doors () {
    return this._doors;
  }

  get model () {
    return this._model;
  }

  drive () {
    return 'zoom';
  }
}
