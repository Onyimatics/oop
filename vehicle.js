/**
* @class {Vehicle}
* @param {manufacturer} [string]
* @param {wheels} [number]
* @param {color} [string]
* @param {model} [string]
* @param {doors} [number]
*
* @method {manufacturer}
* @return {string} get manufacturer name
*
* @method {wheels} [getter]
* @return {number} number of wheels
*
* @method {color} [getter]
* @return {string} getvehicle colr
*
* @method {color} [setter]
* @return {null} set vehicle color
*
* @method {changeColor} [setter] alias of color seter
* @return {null} set vehicle color
*
*
*
* @method {drive}
* @return {string}
*/


module.exports = class Vehicle {
  constructor(manufacturer, wheels, color) {
    if (
        typeof manufacturer !== 'string' ||
        typeof wheels !== 'number' ||
        typeof color !== 'string'
      ) {
        throw new TypeError ('Invalid input type');
      }
    this._manufacturer = manufacturer;
    this._wheels = wheels;
    this._color = color;
  }

  get manufacturer () {
    return this._manufacturer;
  }

  get wheels () {
    return this._wheels;
  }

  set color(newColor) {
    this._color = newColor;
  }

  changeColor(newColor) {
    return color(newColor);
  }

  get color () {
    return this._color;
  }

  drive () {
    return 'vehicle noise';
  }

}
