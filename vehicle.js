module.exports = class Vehicle {
  constructor(manufacturer, wheels, color) {
    if (
        typeof manufacturer !== 'string' ||
        typeof wheels !== 'number' ||
        typeof color !== 'string'
      ) {
        throw new ValueError ('Invalid input type');
      }
    this._manufacturer = manufacturer;
    this._wheels = wheel;
    this._color = color;
    this._changeColor = this._changeColor.bind(this);
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
