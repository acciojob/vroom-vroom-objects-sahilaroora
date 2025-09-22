// 1. Car Constructor Function
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add getMakeModel method to Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// 2. SportsCar Constructor Function (inherits from Car)
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor with this context
  Car.call(this, make, model);

  // Add topSpeed specific to SportsCar
  this.topSpeed = topSpeed;
}

// Inherit from Car's prototype
SportsCar.prototype = Object.create(Car.prototype);

// Restore constructor property on SportsCar prototype
SportsCar.prototype.constructor = SportsCar;

// Add getTopSpeed method to SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};
